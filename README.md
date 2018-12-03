# Naija USSD JSON

This is the one stop shop for all shortcode needs in Nigeria. At first we plan to tackle the renewal of data plans from telcos, later on we plan to document all short codes Nigerians have access to. The core this service provides is:

1. Ease of search
2. Usability - the ability to pin frequently used short codes so dailing them is a three tap process
3. Speed. Everything is fast and furious


# Current Shortcode types
These are the types of short codes that we currently have in our database and respective properties

1. info - This is an informational type, does not cost any money to run (e.g Check Credit Balance)
  - **network** (This is the name of the Telecom company who owns this plan e.g MTN, 9Mobile, Airtel and Glo)
  - **name** (The way the plan is identified by the network e.g MEGA 5, 5GB for ₦2000)
  - **description** (The details of the plan, including validity period)
  - **code** (The USSD code to dail)
  - **period** (The period in which the plan needs to be renewed e.g Daily, Weekly, Monthly, Quartertly)
  - **type** (The various types of USSD e.g info or data)


2. data - These are ussd that are used to topup your data (e.g 5GB for ₦2500 plan )
  - **network** (This is the name of the Telecom company who owns this plan e.g MTN, 9Mobile, Airtel and Glo)
  - **name** (The way the plan is identified by the network e.g MEGA 5, 5GB for ₦2000)
  - **description** (The details of the plan, including validity period)
  - **code** (The USSD code to dail)
  - **period** (The period in which the plan needs to be renewed e.g Daily, Weekly, Monthly, Quartertly)
  - **type** (The various types of USSD e.g info or data)
  - **price** (The cost of the plan in Naira without the ₦ symbol)
  - **plan** (The amount of data written in Mega Bytes e.g 2000 is 2GB)

more to come...

# Example of what JSON array looks like

```json
  [
  {"network": "9mobile", "name": "Data Balance Check", "description": "Check your data balance", "code":"*228#", "period":"", "type": "info"},
  {"network": "9mobile", "name": "Credit Balance Check", "description": "Check your credit balance", "code":"*232#", "period":"", "type": "info"},
  {"network": "9mobile", "name": "40MB for ₦100", "description": "This plan is valid for 24 hours", "code":"*229*3*1#", "period":"daily", "type": "data", "price":"100", "plan":"40"},
  {"network": "9mobile", "name": "150MB for ₦200", "description": "This plan is valid for 7 days", "code":"*229*2*10#", "period": "weekly", "type": "data", "price":"200", "plan":"150"},
  {"network": "9mobile", "name": "1GB for ₦500", "description": "This plan is valid for one weekend – between Friday 11:59 PM and Sunday 11:59 PM", "code":"*5995*2#", "period":"weekend", "type": "data", "price":"500", "plan":"1000"},
  {"network": "9mobile", "name": "500MB for ₦500", "description": "This plan is valid for 30 days", "code":"*229*2*12#", "period":"monthly", "type": "data", "price":"500", "plan":"500"},
  {"network": "9mobile", "name": "1GB for ₦1,000", "description": "This plan is valid for 30 days", "code":"*229*2*7#", "period":"monthly", "type": "data", "price":"1000", "plan":"1000"},
  {"network": "9mobile", "name": "1.5GB for ₦1,200", "description": "This plan is valid for 30 days", "code":"*229*2*25#", "period":"monthly", "type": "data", "price":"1200", "plan":"1500"},
  {"network": "9mobile", "name": "2.5GB for ₦2,000", "description": "This plan is valid for 30 days", "code":"*229*2*8#", "period":"monthly", "type": "data", "price":"2000", "plan":"2500"},
  ]
```