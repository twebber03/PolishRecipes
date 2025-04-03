# The purpose of this is to pull the recipe data in by scraping it off the internet with the use of recipe scrapers python package 
# Package Source: https://github.com/hhursev/recipe-scrapers.git

import pandas as pd
from recipe_scrapers import scrape_me
from recipe_scrapers._exceptions import SchemaOrgException
import math 


def scrape_recipe(url, df): 
    #utilzing the recipe scraper to get the data and infromation for the polish dishes listed on the all recipes website 
    scraper = scrape_me(url)
    #try/except block to see if the values exist, otherwise default them to 0 
    try:
        ratings = scraper.ratings()
        numReviews = scraper.ratings_count()
    except SchemaOrgException:
        ratings = 0
        numReviews = 0

    # get the weight by popularity score 
    weight = int((ratings * 2) + math.log(numReviews + 1))
    # add the desired variables as a tuple into the list 
    df.append((weight, scraper.title(), scraper.description(), scraper.ingredients(), scraper.instructions(),scraper.category(), scraper.nutrients(), scraper.yields(), scraper.image()))

    # print(scraper.to_json())
    # help(scraper)
    #return list 
    return df


def convertToCSV(df):
    # convert the list to a pandas dataframe for CSV conversion
    recipe_df = pd.DataFrame(df) 
    # convert the dataframe into a csv file for backend development of program 
    recipe_df.to_csv('recipes.csv', index=True)

def main(): 
    #creating a dataframe tupled list for each recipe
    df = [] 
    #getting the urls for recipe
    with open('/Users/angelalojko/Desktop/CS351/fgp-team5-1/datapulling/links.txt', 'r') as file: 
        for line in file: 
            url = line.strip()
            scrape_recipe(url, df)

    # take the list and convert to a csv 
    convertToCSV(df)


main()