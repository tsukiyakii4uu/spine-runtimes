#!/bin/bash
set -e

cd "$(dirname "$0")"

# Source logging utilities
source ../../formatters/logging/logging.sh

if [ -z "$GITHUB_REF" ]; then
    BRANCH=$(git symbolic-ref --short -q HEAD)
else
    BRANCH=${GITHUB_REF#refs/heads/}
fi

# Get the latest commit message
COMMIT_MSG=$(git log -1 --pretty=%B)

log_title "Spine-Construct3 Build"
log_detail "Branch: $BRANCH"

log_action "Installing dependencies"
pushd ".." > /dev/null
if npm install > /tmp/npm-install.log 2>&1; then
	log_ok
else
	log_fail
	log_error_output "$(cat /tmp/npm-install.log)"
	exit 1
fi
popd > /dev/null

# Public only if the commit message is in the correct format
if ! [ -z "$C3_UPDATE_URL" ] && ! [ -z "$BRANCH" ];
then
	log_action "Creating artifacts zip"
	pushd "dist" > /dev/null
	if ZIP_OUTPUT=$(zip -r ../EsotericSoftware_SpineConstruct3.c3addon ./* 2>&1); then
		log_ok
		popd > /dev/null
		if ZIP_OUTPUT=$(zip spine-construct3.zip EsotericSoftware_SpineConstruct3.c3addon 2>&1); then
			log_ok
		else
			log_fail
			log_error_output "$ZIP_OUTPUT"
			exit 1
		fi
	else
		log_fail
		log_error_output "$ZIP_OUTPUT"
		exit 1
	fi

	log_action "Uploading to $C3_UPDATE_URL$BRANCH"
	if CURL_OUTPUT=$(curl -f -F "file=@spine-construct3.zip" "$C3_UPDATE_URL$BRANCH" 2>&1); then
		log_ok
	else
		log_fail
		log_error_output "$CURL_OUTPUT"
		exit 1
	fi

	log_summary "✓ Build and deployment successful"
else
	log_skip "Deployment skipped (C3_UPDATE_URL and/or BRANCH not set)"
	log_summary "✓ Build successful"
fi
