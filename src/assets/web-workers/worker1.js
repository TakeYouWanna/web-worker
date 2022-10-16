function upperCase(str) {
  if (typeof str === "string") {
    return str.toUpperCase();
  }
  return "Incorrect parameter";
}

self.addEventListener(
  "message",
  function (event) {
    const { data } = event;
    switch (data.cmd) {
      case "upperCase":
        const result = upperCase(data.data);
        self.postMessage(result);
        break;
      default:
        self.postMessage("Unknown command");
    }
  },
  false
);
