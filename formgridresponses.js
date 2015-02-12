/**
 * List unique items from a grid response.
 *
 * @param gridrows The grid response rows.
 * @return A list of unique items from given grid.
 * @customfunction
 */
function GRIDUNIQUES(gridrows) {
  // get row count
  for(var y = 0; y < gridrows.length; y++) {
    var gridrow = gridrows[y]
    var gridstring = gridrow.join("")
    if(!gridstring) {
      var rowcount = y
      break
    }
  }
  // put all cell values in hash
  // duplicates will hash identical and overwrite each other
  var uniquehash = {}
  for(var y = 0; y < rowcount; y++) {
    var gridrow = gridrows[y]
    for(var x = 0; x < gridrow.length; x++) {
      var gridcell = gridrow[x]
      uniquehash[gridcell] = gridcell
    }
  }
  // collect hash values
  var uniques = []
  for(var uniqueitem in uniquehash) {
    if(uniquehash.hasOwnProperty(uniqueitem)) {
      uniques.push(uniquehash[uniqueitem])
    }
  }
  return uniques
}

/**
 * Compose grid response table.
 *
 * @param gridrows The grid response rows.
 * @param titlerow The grid title row.
 * @param namecolumn The "names" column.
 * @param newtitle The title for the titlerow turned column.
 * @return Composed grid response table.
 * @customfunction
 */
function GRID(gridrows, titlerow, namecolumn, newtitle) {
  var grid = []
  // get row count
  for(var y = 0; y < gridrows.length; y++) {
    var gridrow = gridrows[y]
    var gridstring = gridrow.join("")
    if(!gridstring) {
      var rowcount = y
      break
    }
  }
  // prepare new title row
  var newtitlerow = [newtitle]
  for(var i = 0; i < titlerow[0].length; i++) {
    var title = titlerow[0][i]
    newtitlerow.push(title)
  }
  grid.push(newtitlerow)
  // prepare new rows
  for(var y = 0; y < rowcount; y++) {
    var name = String(namecolumn[y])
    var newgridrow = [name]
    var gridrow = gridrows[y]
    for(var x = 0; x < gridrow.length; x++) {
      var gridcell = gridrow[x]
      newgridrow.push(gridcell)
    }
    grid.push(newgridrow)
  }
  return grid
}

/**
 * Summarize by rows of grid response table.
 *
 * @param gridrows The grid response rows.
 * @param titlerow The grid title row.
 * @param namecolumn The "names" column.
 * @param newtitle The title for the titlerow turned column.
 * @return Grid response table summarized by rows.
 * @customfunction
 */
function GRIDSUMROWS(gridrows, titlerow, namecolumn, newtitle) {
  var grid = []
  var uniques = GRIDUNIQUES(gridrows)
  // get row count
  for(var y = 0; y < gridrows.length; y++) {
    var gridrow = gridrows[y]
    var gridstring = gridrow.join("")
    if(!gridstring) {
      var rowcount = y
      break
    }
  }
  // new title row is uniques
  var newtitlerow = [newtitle]
  for(var i = 0; i < uniques.length; i++) {
    var unique = uniques[i]
    newtitlerow.push(unique)
  }
  grid.push(newtitlerow)
  // prepare new rows
  for(var y = 0; y < rowcount; y++) {
    var name = String(namecolumn[y])
    var newgridrow = [name]
    // prepare unique counter
    var summary = {}
    for(var i = 0; i < uniques.length; i++) {
      var unique = uniques[i]
      summary[unique] = []
    }
    // count uniques of row
    var gridrow = gridrows[y]
    for(var x = 0; x < gridrow.length; x++) {
      var gridcell = gridrow[x]
      summary[gridcell].push(titlerow[0][x])
    }
    // collect unique counts per row
    for(var i = 0; i < uniques.length; i++) {
      var unique = uniques[i]
      var summaryforunique = summary[unique]
      var summarystring = summaryforunique.join("\n")
      newgridrow.push(summarystring)
    }
    grid.push(newgridrow)
  }
  return grid
}

/**
 * Count by rows of grid response table.
 *
 * @param gridrows The grid response rows.
 * @param titlerow The grid title row.
 * @param namecolumn The "names" column.
 * @param newtitle The title for the titlerow turned column.
 * @return Grid response table with rows counted.
 * @customfunction
 */
function GRIDCOUNTROWS(gridrows, titlerow, namecolumn, newtitle) {
  var grid = []
  var uniques = GRIDUNIQUES(gridrows)
  // get row count
  for(var y = 0; y < gridrows.length; y++) {
    var gridrow = gridrows[y]
    var gridstring = gridrow.join("")
    if(!gridstring) {
      var rowcount = y
      break
    }
  }
  // new title row is uniques
  var newtitlerow = [newtitle]
  for(var i = 0; i < uniques.length; i++) {
    var unique = uniques[i]
    newtitlerow.push(unique)
  }
  grid.push(newtitlerow)
  // prepare new rows
  for(var y = 0; y < rowcount; y++) {
    var name = String(namecolumn[y])
    var newgridrow = [name]
    // prepare unique counter
    var uniquecounter = {}
    for(var i = 0; i < uniques.length; i++) {
      var unique = uniques[i]
      uniquecounter[unique] = 0
    }
    // count uniques of row
    var gridrow = gridrows[y]
    for(var x = 0; x < gridrow.length; x++) {
      var gridcell = gridrow[x]
      uniquecounter[gridcell] += 1
    }
    // collect unique counts per row
    for(var i = 0; i < uniques.length; i++) {
      var unique = uniques[i]
      var count = uniquecounter[unique]
      newgridrow.push(count)
    }
    grid.push(newgridrow)
  }
  return grid
}

/**
 * Summarize by columns of grid response table.
 *
 * @param gridrows The grid response rows.
 * @param titlerow The grid title row.
 * @param namecolumn The "names" column.
 * @param newtitle The title for the titlerow turned column.
 * @return Grid response table with columns summarized.
 * @customfunction
 */
function GRIDSUMCOLUMNS(gridrows, titlerow, namecolumn, newtitle) {
  var grid = []
  var uniques = GRIDUNIQUES(gridrows)
  // get row count
  for(var y = 0; y < gridrows.length; y++) {
    var gridrow = gridrows[y]
    var gridstring = gridrow.join("")
    if(!gridstring) {
      var rowcount = y
      break
    }
  }
  // prepare new title row
  var newtitlerow = [newtitle]
  for(var x = 0; x < titlerow[0].length; x++) {
    var title = titlerow[0][x]
    newtitlerow.push(title)
  }
  grid.push(newtitlerow)
  // prepare unique counters per column
  var summaries = []
  for(var x = 0; x < titlerow[0].length; x++) {
    var summary = {}
    for(var i = 0; i < uniques.length; i++) {
      var unique = uniques[i]
      summary[unique] = []
    }
    summaries.push(summary)
  }
  // count uniques per column
  for(var y = 0; y < rowcount; y++) {
    var gridrow = gridrows[y]
    for(var x = 0; x < gridrow.length; x++) {
      var gridcell = gridrow[x]
      summaries[x][gridcell].push(namecolumn[y])
    }
  }
  // collect unique counts per column
  for(var i = 0; i < uniques.length; i++) {
    var unique = uniques[i]
    var newgridrow = [unique]
    for(var x = 0; x < titlerow[0].length; x++) {
      var summaryforunique = summaries[x][unique]
      var summarystring = summaryforunique.join("\n")
      newgridrow.push(summarystring)
    }
    grid.push(newgridrow)
  }
  return grid
}

/**
 * Count by columns of grid response table.
 *
 * @param gridrows The grid response rows.
 * @param titlerow The grid title row.
 * @param namecolumn The "names" column.
 * @param newtitle The title for the titlerow turned column.
 * @return Grid response table with columns counted.
 * @customfunction
 */
function GRIDCOUNTCOLUMNS(gridrows, titlerow, namecolumn, newtitle) {
  var grid = []
  var uniques = GRIDUNIQUES(gridrows)
  // get row count
  for(var y = 0; y < gridrows.length; y++) {
    var gridrow = gridrows[y]
    var gridstring = gridrow.join("")
    if(!gridstring) {
      var rowcount = y
      break
    }
  }
  // prepare new title row
  var newtitlerow = [newtitle]
  for(var x = 0; x < titlerow[0].length; x++) {
    var title = titlerow[0][x]
    newtitlerow.push(title)
  }
  grid.push(newtitlerow)
  // prepare unique counters per column
  var uniquecounters = []
  for(var x = 0; x < titlerow[0].length; x++) {
    var uniquecounter = {}
    for(var i = 0; i < uniques.length; i++) {
      var unique = uniques[i]
      uniquecounter[unique] = 0
    }
    uniquecounters.push(uniquecounter)
  }
  // count uniques per column
  for(var y = 0; y < rowcount; y++) {
    var gridrow = gridrows[y]
    for(var x = 0; x < gridrow.length; x++) {
      var gridcell = gridrow[x]
      uniquecounters[x][gridcell] += 1
    }
  }
  // collect unique counts per column
  for(var i = 0; i < uniques.length; i++) {
    var unique = uniques[i]
    var newgridrow = [unique]
    for(var x = 0; x < titlerow[0].length; x++) {
      newgridrow.push(uniquecounters[x][unique])
    }
    grid.push(newgridrow)
  }
  return grid
}
