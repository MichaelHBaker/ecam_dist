Office.onReady((function(){Office.context.ui.addHandlerAsync(Office.EventType.DialogParentMessageReceived,(function(e){var n=JSON.parse(e.message);console.log("Receiving message in dialog:",n),document.getElementById("elementIdDisplay").innerText="Button clicked: "+n.elementId})),document.getElementById("okButton").addEventListener("click",(function(){Office.context.ui.messageParent(JSON.stringify({status:"ok"}))}))}));
//# sourceMappingURL=popup.js.map