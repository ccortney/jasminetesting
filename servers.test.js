describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add server on submitServerInfo() with blank input', function() {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })

  it('it should add a new row to the Server Table on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let currentTableRows = document.querySelectorAll('#serverTable tbody tr td');

    expect(currentTableRows.length).toEqual(2);
    expect(currentTableRows[0].innerText).toEqual('Alice');
    expect(currentTableRows[1].innerText).toEqual('$0.00');
  });

  afterEach(function() {
    serverTbody.innerHTML = '';
    serverID = 0;
    allServers = {};
  });
});
