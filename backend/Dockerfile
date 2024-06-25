FROM python:3.10-alpine3.18

WORKDIR /usr/src/backend

RUN apk add --no-cache ca-certificates wget fuse openssl \
        postgresql-dev python3-dev && \
    apk add build-base && \
    apk add gcc libc-dev linux-headers && \
    apk add libffi-dev

COPY . .

RUN mkdir /var/log/wimars_backend/ && mkdir /etc/letsencrypt
RUN pip install --upgrade pip && \
    pip install -r requirements.txt --use-deprecated=legacy-resolver

EXPOSE 8000

CMD gunicorn wimars.wsgi:application \
    --certfile=/etc/letsencrypt/live/$site_url/fullchain.pem \
    --keyfile=/etc/letsencrypt/live/$site_url/privkey.pem \
    --access-logfile=/var/logs/wimars_backend/access_log.txt \
    --error-logfile=/var/logs/wimars_backend/error_log.txt \
    --bind 0.0.0.0:8000 --workers 4

# to be used for debugging:
# CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]


