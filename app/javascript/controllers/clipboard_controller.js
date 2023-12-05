import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["flash"]

  copy() {
    navigator.clipboard.writeText(this.contentValue).then(
      () => {
        // clipboard successfully set
        this.flashTarget.textContent = "Copied!";
        this.flashTarget.classList.remove('hidden');
        setTimeout(() => {
          this.flashTarget.classList.add('hidden');
          this.flashTarget.textContent = ""
        }, 1000)
      },
      () => {
        // clipoboard write failed
        alert("Failed to copy to clipboard")
      }
    )
  }
}
