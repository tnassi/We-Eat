# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'rest-client'
require 'json'

url = 'https://developers.zomato.com/api/v2.1/search?city_id=280&count=20&start=0'
response = RestClient.get(url, {"user-key" => '230cf49db5bd55276d7cc5d4dcb8c625'})
parsed_response = JSON.parse(response)

parsed_response["restaurants"].each do |a|
    r = a["restaurant"]
    new_restaurant = Restaurant.create!(name: r["name"], cuisine: r["cuisines"].split(", ")[0], rating: (r["user_rating"]["aggregate_rating"].to_f/5*3).to_i, accepts_ten_bis: true, address: r["location"]["address"], maximum_delivery_time: 1, image_url: r["thumb"], latitude: r["location"]["latitude"], longitude: r["location"]["longitude"])
end