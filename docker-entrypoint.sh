#!/bin/bash

set -e

cd /usr/share/kibana/bin

CURRENT_PLUGINS=$(kibana-plugin list)

if [ "$OPENDISTRO_ALERTING" != "" ]; then
    # If not installed, install
    if [[ $CURRENT_PLUGINS != *"opendistroAlertingKibana"* ]]; then
        kibana-plugin install https://d3g5vo6xdbdb9a.cloudfront.net/downloads/kibana-plugins/opendistro-alerting/opendistroAlertingKibana-1.12.0.2.zip
    fi
else
    # If installed, uninstall
    if [[ $CURRENT_PLUGINS == *"opendistroAlertingKibana"* ]]; then
        kibana-plugin remove opendistroAlertingKibana
    fi
fi

if [ "$OPENDISTRO_ANOMALYDETECTION" != "" ]; then
    # If not installed, install
    if [[ $CURRENT_PLUGINS != *"opendistroAnomalyDetectionKibana"* ]]; then
        kibana-plugin install https://d3g5vo6xdbdb9a.cloudfront.net/downloads/kibana-plugins/opendistro-anomaly-detection/opendistroAnomalyDetectionKibana-1.12.0.0.zip
    fi
else
    # If installed, uninstall
    if [[ $CURRENT_PLUGINS == *"opendistroAnomalyDetectionKibana"* ]]; then
        kibana-plugin remove opendistroAnomalyDetectionKibana
    fi
fi

if [ "$OPENDISTRO_GANTTCHART" != "" ]; then
    # If not installed, install
    if [[ $CURRENT_PLUGINS != *"opendistroGanttChartKibana"* ]]; then
        kibana-plugin install https://d3g5vo6xdbdb9a.cloudfront.net/downloads/kibana-plugins/opendistro-gantt-chart/opendistroGanttChartKibana-1.12.0.0.zip
    fi
else
    # If installed, uninstall
    if [[ $CURRENT_PLUGINS == *"opendistroGanttChartKibana"* ]]; then
        kibana-plugin remove opendistroGanttChartKibana
    fi
fi

if [ "$OPENDISTRO_INDEXMANAGEMENT" != "" ]; then
    # If not installed, install
    if [[ $CURRENT_PLUGINS != *"opendistroIndexManagementKibana"* ]]; then
        kibana-plugin install https://d3g5vo6xdbdb9a.cloudfront.net/downloads/kibana-plugins/opendistro-index-management/opendistroIndexManagementKibana-1.12.0.0.zip
    fi
else
    # If installed, uninstall
    if [[ $CURRENT_PLUGINS == *"opendistroIndexManagementKibana"* ]]; then
        kibana-plugin remove opendistroIndexManagementKibana
    fi
fi

if [ "$OPENDISTRO_NOTEBOOKS" != "" ]; then
    # If not installed, install
    if [[ $CURRENT_PLUGINS != *"opendistroNotebooksKibana"* ]]; then
        kibana-plugin install https://d3g5vo6xdbdb9a.cloudfront.net/downloads/kibana-plugins/opendistro-notebooks/opendistroNotebooksKibana-1.12.0.0.zip
    fi
else
    # If installed, uninstall
    if [[ $CURRENT_PLUGINS == *"opendistroNotebooksKibana"* ]]; then
        kibana-plugin remove opendistroNotebooksKibana
    fi
fi

if [ "$OPENDISTRO_QUERYWORKBENCH" != "" ]; then
    # If not installed, install
    if [[ $CURRENT_PLUGINS != *"opendistroQueryWorkbenchKibana"* ]]; then
        kibana-plugin install https://d3g5vo6xdbdb9a.cloudfront.net/downloads/kibana-plugins/opendistro-query-workbench/opendistroQueryWorkbenchKibana-1.12.0.0.zip
    fi
else
    # If installed, uninstall
    if [[ $CURRENT_PLUGINS == *"opendistroQueryWorkbenchKibana"* ]]; then
        kibana-plugin remove opendistroQueryWorkbenchKibana
    fi
fi

if [ "$OPENDISTRO_REPORTS" != "" ]; then
    # If not installed, install
    if [[ $CURRENT_PLUGINS != *"opendistroReportsKibana"* ]]; then
        kibana-plugin install https://d3g5vo6xdbdb9a.cloudfront.net/downloads/kibana-plugins/opendistro-reports/linux/x64/opendistroReportsKibana-1.12.0.0.zip
    fi
else
    # If installed, uninstall
    if [[ $CURRENT_PLUGINS == *"opendistroReportsKibana"* ]]; then
        kibana-plugin remove opendistroReportsKibana
    fi
fi

if [ -z "$ELASTICSEARCH_USER" ] || [ -z "$ELASTICSEARCH_PASSWORD" ]; then
    echo >&2 'error: ELASTICSEARCH_USER or/and ELASTICSEARCH_PASSWORD environment variables were not configured'
    echo >&2 '  these two docker environment variables must be configured before running the container'
    exit 1
fi

# For the sed command, we don't use directly the '-i' option because it moves (mv)
# the output file under the hood. That might generate problems when kibana.yml
# is mounted in a volume.

# Generate the temporary file for changing kibana.yml.
TMPFILE=$(mktemp)

if [ "$ANONYMOUS_USER" != "" ]; then
    sed '/opendistro_security.auth.anonymous_auth_enabled/d' /opt/kibana/config/kibana.yml > $TMPFILE && cat $TMPFILE > /opt/kibana/config/kibana.yml
    printf "opendistro_security.auth.anonymous_auth_enabled: \"$ANONYMOUS_USER\"\n" >> /opt/kibana/config/kibana.yml
fi

sed '/opendistro_security.basicauth.login.brandimage/d' /opt/kibana/config/kibana.yml > $TMPFILE && cat $TMPFILE > /opt/kibana/config/kibana.yml
if [ "$LOGIN_BRANDIMAGE" != "" ]; then
    printf "opendistro_security.basicauth.login.brandimage: \"$LOGIN_BRANDIMAGE\"\n" >> /opt/kibana/config/kibana.yml
else
    printf "opendistro_security.basicauth.login.brandimage: 'https://raw.githubusercontent.com/Bitergia/bitergia-analytics-odfe-kibana/master/assets/bitergia_login_logo.png'\n" >> /opt/kibana/config/kibana.yml
fi

sed '/opendistro_security.basicauth.login.title/d' /opt/kibana/config/kibana.yml > $TMPFILE && cat $TMPFILE > /opt/kibana/config/kibana.yml
if [ "$LOGIN_TITLE" != "" ]; then
    printf "opendistro_security.basicauth.login.title: \"$LOGIN_TITLE\"\n" >> /opt/kibana/config/kibana.yml
else
    printf "opendistro_security.basicauth.login.title: Please login to Bitergia Analytics Dashboard\n" >> /opt/kibana/config/kibana.yml
fi

sed '/opendistro_security.basicauth.login.subtitle/d' /opt/kibana/config/kibana.yml > $TMPFILE && cat $TMPFILE > /opt/kibana/config/kibana.yml
if [ "$LOGIN_SUBTITLE" != "" ]; then
    printf "opendistro_security.basicauth.login.subtitle: \"$LOGIN_SUBTITLE\"\n" >> /opt/kibana/config/kibana.yml
else
    printf 'opendistro_security.basicauth.login.subtitle: If you have forgotten your username or password, please contact the Bitergia staff\n' >> /opt/kibana/config/kibana.yml
fi

# Removing the temporary file
rm $TMPFILE

# Execute kibana
/usr/local/bin/kibana-docker
