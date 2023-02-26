class DialogBox {
	static #createBackdrop() {
		const backdrop = document.createElement("div");
		backdrop.className = "custom-prompt-backdrop";
		return backdrop;
	}

	static #createParent() {
		const parent = document.createElement("div");
		parent.className = "custom-prompt";
		return parent;
	}

	static #createContent() {
		const content = document.createElement("div");
		content.className = "custom-prompt-content";
		return content;
	}

	static #createHeader(title) {
		const promptHeader = document.createElement("div");
		promptHeader.className = "custom-prompt-header";
		const promptHeading = document.createElement("p");
		promptHeading.className = "custom-prompt-heading";
		promptHeading.innerText = title || window.location.hostname + " says";

		promptHeader.appendChild(promptHeading);
		return promptHeader;
	}

	static #createBody() {
		const promptBody = document.createElement("div");
		promptBody.className = "custom-prompt-body";

		return promptBody;
	}
	static #createMessage(message) {
		const promptMessage = document.createElement("p");
		promptMessage.className = "custom-prompt-message";
		promptMessage.innerText = message;

		return promptMessage;
	}
	static #createInput(inputType) {
		const promptInput = document.createElement("input");
		promptInput.className = "custom-prompt-input";
		promptInput.type = inputType || "text";
		promptInput.placeholder = "Enter the Value";

		return promptInput;
	}

	static #createFooter() {
		const promptButtons = document.createElement("div");
		promptButtons.className = "custom-prompt-buttons";
		return promptButtons;
	}

	static #createOkButton(accept) {
		const promptAccept = document.createElement("button");
		promptAccept.className = "custom-prompt-ok-button";
		promptAccept.innerText = accept || "OK";
		return promptAccept;
	}

	static #createCancelButton(cancel) {
		const promptCancel = document.createElement("button");
		promptCancel.className = "custom-prompt-cancel-button";
		promptCancel.innerText = cancel || "Cancel";
		return promptCancel;
	}

    static prompt(message, title, inputType, accept, cancel) {
        return new Promise((resolve, reject) => {
          const backdrop = this.#createBackdrop();
          const parent = this.#createParent();
          const content = this.#createContent();
          const header = this.#createHeader(title);
          const body = this.#createBody();
          const acceptButton = this.#createOkButton(accept);
          const cancelButton = this.#createCancelButton(cancel);
          const footer = this.#createFooter();
          const promptInput = this.#createInput(inputType);
          const promptMessage = this.#createMessage(message);
    
          parent.appendChild(content);
          content.appendChild(header);
          content.appendChild(body);
          body.appendChild(promptMessage);
          body.appendChild(promptInput);
          content.appendChild(footer);
          footer.appendChild(cancelButton);
          footer.appendChild(acceptButton);
          document.body.appendChild(parent);
          document.body.appendChild(backdrop);
    
          acceptButton.onclick = () => {
            const promptInput = body.querySelector(".custom-prompt-input");
            const result = promptInput ? promptInput.value : null;
            parent.remove();
            backdrop.remove();
            resolve(result);
          };
    
          cancelButton.onclick = () => {
            parent.remove();
            backdrop.remove();
            reject(false, null);
          };
        });
      }

	static confirm(message, title,accept,cancel) {
		return new Promise((resolve, reject) => {
			const backdrop = this.#createBackdrop();
			const parent = this.#createParent();
			const content = this.#createContent();
			const header = this.#createHeader(title);
			const body = this.#createBody();
			const acceptButton = this.#createOkButton(accept);
			const cancelButton = this.#createCancelButton(cancel);
			const footer = this.#createFooter();
			const promptMessage = this.#createMessage(message);

			promptMessage.style.minHeight = "100px";
			parent.appendChild(content);
			content.appendChild(header);
			content.appendChild(body);
			body.appendChild(promptMessage);
			content.appendChild(footer);
			footer.appendChild(cancelButton);
			footer.appendChild(acceptButton);
			document.body.appendChild(parent);
			document.body.appendChild(backdrop);

			acceptButton.onclick = () => {
				parent.remove();
				backdrop.remove();
				resolve(true);
			};

			cancelButton.onclick = () => {
				parent.remove();
				backdrop.remove();
				resolve(false);
			};
		});
	}
	static alert(message, title) {
		return new Promise((resolve, reject) => {
			const parent = this.#createParent();
			const content = this.#createContent();
			const header = this.#createHeader(title);
			const body = this.#createBody();
			const acceptButton = this.#createOkButton();
			const footer = this.#createFooter();
			const promptMessage = this.#createMessage(message);

			promptMessage.style.minHeight = "100px";
			parent.appendChild(content);
			content.appendChild(header);
			content.appendChild(body);
			body.appendChild(promptMessage);
			content.appendChild(footer);
			footer.appendChild(acceptButton);
			document.body.appendChild(parent);

			acceptButton.onclick = () => {
				parent.remove();
				resolve(true);
			};
		});
	}
}
