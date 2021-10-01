FROM python:3.8-alpine
ENV PYTHONUNBUFFERED 1
WORKDIR /postgapp
RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .
# run entrypoint.sh
ENTRYPOINT ["/postgapp/entrypoint.sh"]

