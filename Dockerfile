FROM amazon/opendistro-for-elasticsearch-kibana:1.12.0

WORKDIR /usr/share/kibana

ENV PATH=/usr/share/kibana/bin:$PATH

RUN kibana-plugin install "https://github.com/Bitergia/bitergia-analytics-plugin/releases/download/0.0.1_7.10.0/bitergiaAnalytics-7.10.0.zip"

COPY ./hack/template.js src/core/server/rendering/views/.
COPY ./favicons/* src/core/server/core_app/assets/favicons/

USER root

COPY ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

USER 1000

ENTRYPOINT ["/docker-entrypoint.sh"]