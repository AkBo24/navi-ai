FROM ubuntu:latest

RUN apt-get update && apt-get install -y \
	python3 \
	python3-pip \
	python3-venv && \
	rm -rf /var/lib/apt/lists/*

RUN mkdir -p usr/src/app \
	&& python3 -m venv /usr/src/app/venv

ENV PATH="/usr/src/app/venv/bin:$PATH"
COPY ./requirements.txt /usr/src/app
RUN /usr/src/app/venv/bin/pip install --no-cache-dir -r /usr/src/app/requirements.txt

