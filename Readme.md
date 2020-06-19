# ipm package: CRUD_Grid_Example

## Overview

This system demonstrates how to connect a CRUD grid to a collection datasource in a portal

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

Create a user and log into portal to view full example

## Usage

This example shows how to connect a CRUD Grid widget to a collection datasource to achieve the following:

1. Display collection rows in the grid
2. Filter/search/sort collection data from the grid UI
3. Add new items to the collection
4. Update items in the collection
5. Delete items from the collection
6. Export the collection data to a .csv file
7. Highlight a row in the grid and update a `local variable` datasource

All parser code was provided by the default parsers for the collection datasource.

![](https://imgur.com/a/cCoUhqB)

## Parsers

__Grid Data vs. Fetch Grid Data __

The _Grid Data_ formats the items and columns and supplies it to the grid. _Fetch Grid Data_  fetches the data - whether that's from a remote datasource (collection, code service, etc.) or from a local datasource. Updating the datasource in the _Fetch Grid Data_ parser will update the _Grid Data_ parser.

__Item Event__

This allows for custom implementation of Item Events, which are listed in [Usage](#usage).

_Example for filtering collection data using logic query_

Options include:

* PAGESIZE
* PAGENUM
* FILTER
* SORT


``` javascript
parser = (ctx) => {
    ctx.widget.query.query.PAGESIZE = 7;
    ctx.widget.query.query.PAGENUM = 2;
    console.log(ctx.widget.query);
    return ctx.widget;
}
```
