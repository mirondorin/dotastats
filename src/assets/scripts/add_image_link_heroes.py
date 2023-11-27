import requests
import json

response = requests.get('https://api.opendota.com/api/heroes')
heroes = response.json()

for hero in heroes:
  hero_name = hero.get('name').removeprefix('npc_dota_hero_')
  base_url = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/"
  hero['image_url'] = base_url + hero_name + ".png"

with open("formatted_heroes.json", mode="w") as file:
  json.dump(heroes, file)