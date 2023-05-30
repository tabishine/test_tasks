function processTableData(table) {
    var orders = [];
    var rowCount = table.length;
    var columnCount = table[0].length;
    var currentOrder = {};
    var currentItems = [];
    var currentQuantity, currentPrice;
  
    for (var i = 1; i < rowCount; i++) {
      var row = table[i];
  
      if (row.length === 0) {
        continue;
      }
  
      var orderId = row[0];
      var item = row[1];
      var quantity = row[columnCount - 2];
      var price = row[columnCount - 1];
  
      if (orderId !== '') {
        if (currentOrder.orderId) {
          currentOrder.orderItems = currentItems;
          currentOrder.quantity = currentQuantity;
          currentOrder.price = currentPrice;
          orders.push(currentOrder);
  
          currentItems = [];
          currentQuantity = undefined;
          currentPrice = undefined;
        }
  
        currentOrder = {
          orderId: orderId,
          orderItems: [],
          quantity: 0,
          price: 0
        };
      }
  
      if (!currentItems.includes(item)) {
        currentItems.push(item);
      }
  
      currentQuantity = quantity;
      currentPrice = price;
    }
  
    if (currentOrder.orderId) {
      currentOrder.orderItems = currentItems;
      currentOrder.quantity = currentQuantity;
      currentOrder.price = currentPrice;
      orders.push(currentOrder);
    }
  
    return orders;
  }
  
  // Пример использования:
  var table = [
    ['Order ID', 'Item', 'Quantity', 'Price'],
    [1112, 'Гелевая ручка', 4, 2450],
    ['', 'Бумага', '', ''],
    ['', 'Степлер', '', ''],
    [1145, 'Карандаш', 2, 800],
    ['', 'Блокнот', '', ''],
    [1167, 'Ручка шариковая', 5, 1500],
    ['', 'Бумага', '', ''],
    ['', 'Клей', '', ''],
  ];
  
  var orders = processTableData(table);
  console.log(orders);
  

