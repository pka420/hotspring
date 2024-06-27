FROM python:3.10-alpine3.18

WORKDIR /usr/src/backend

COPY . .

RUN mkdir /var/log/hotspring_backend/ && mkdir /etc/letsencrypt
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

EXPOSE 8000

CMD gunicorn EventSearcher.wsgi:application \
    --certfile=/etc/letsencrypt/live/$site_url/fullchain.pem \
    --keyfile=/etc/letsencrypt/live/$site_url/privkey.pem \
    --access-logfile=/var/logs/hotspring_backend/access_log.txt \
    --error-logfile=/var/logs/hotspring_backend/error_log.txt \
    --bind 0.0.0.0:8000 --workers 1


