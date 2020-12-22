FROM amazon/opendistro-for-elasticsearch-kibana:1.12.0

WORKDIR /usr/share/kibana

ENV PATH=/usr/share/kibana/bin:$PATH

RUN kibana-plugin install "https://github.com/dlumbrer/kibiter-menu-plugin/releases/download/0.0.1_7.10.1/kibiterMenu-7.10.0.zip"

COPY ./hack/template.js src/core/server/rendering/views/.
COPY ./favicons/* src/core/server/core_app/assets/favicons/
