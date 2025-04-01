import requests
import time
from recipe_scrapers import scrape_me


def scrape_recipe(url, df): 
    #utilzing the recipe scraper to get the data and infromation for the polish dishes listed on the all recipes website 
    scraper = scrape_me(url)

    # df.append((scraper.title(), scraper.description(), scraper.ingredients(), scraper.ingredient_groups(), scraper.instructions(),scraper.category(), scraper.nutrients(), scraper.prep_time(), scraper.yields(), scraper.image()))

    print(scraper.to_json())
    # for a complete list of methods:
    # help(scraper)
    return df


def main(): 
    #creating a dataframe tupled list for each recipe
    df = [] 
    #getting the url for recipe
    with open('links.txt', 'r') as file: 
        for line in file: 
            print(line)
    # for i in range(1): 
    #     url = input("Enter url here:")
    #     scrape_recipe(url, df)
    #     time.sleep(1)

    # print(len(df))

    # for i in range(len(df)):
    #     print(df[i])


main()