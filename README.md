# hotspring

## Description
This is an assignment, 
- search ticketmaster api for events and display them in a list
- with favourites functionality

## Deployment

1. first create env files:

```bash
#backend/.env
django_secret_key=""
# True or False
django_debug_mode="" 

#ticketmaster api key
consumer_key=""
consumer_secret=""

#ipinfo api key
ipinfo_token=""

#google maps api key
google_maps_api_key=""

#postgres db
postgres_db_name=""
postgres_db_username=""
postgres_db_password=""
postgres_db_host=""
postgres_db_port=""

#site url ex: localhost:8000 or example.com
site_url=""

#frontend/.env
REACT_APP_GOOGLEMAP_API_KEY=""
```

2. Docker build and up

```bash
docker compose --env-file backend/.env build --no-cache
docker compose --env-file backend/.env up -d
```

3. Migrate database

```bash
docker exec -it hotspring_backend_1 python manage.py migrate
```



## For development

I am not going to write these.. figure it out yourself as a developer.
