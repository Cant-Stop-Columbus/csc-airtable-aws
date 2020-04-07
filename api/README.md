# CantStopColumbus API

Welcome to the CantStopColumbus API. For our main website, we need some APIs to read/write
to an database. Because the website is built with Jekyll, a static site builder, all API
calls have to be made from the context of the web page. This API is written for Amazon Lambda
and lets us save data in an online store quickly & easily.

## REST

The API follows the REST pattern, with create, read, update, delete (CRUD) operations provided
via HTTP verbs. 

## Promotions

### Create
```
POST /promotions
business_name: string
promo_text: string
website: url
```