// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  const new_array = drivers.filter(function (driver) {
    return driver.revenue > revenue;
  })
  return new_array.map(function(name){
    new_array.name;
  })
}