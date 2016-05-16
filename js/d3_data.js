var pic = d3.select("table").selectAll("td")
    .data([4, 5, 6, 7])
    .text(function(d) { return d; });

// Enter…
pic.enter().append("td")
    .text(function(d) { return d; });

// Exit…
pic.exit().remove();