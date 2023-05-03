export class Day {
    constructor(public name = "", public date: Date = new Date, public morning = false, public afternoon = false, public night = false, public comment?: string) {
    }
    getDay(): string {
        let time = "עובדת ";
        if (!this.morning && !this.afternoon && !this.night)
            time = "חופש";
        else if (this.morning && this.afternoon)
            time += "בוקר ארוך";
        else if (this.afternoon && this.night)
            time += "לילה ארוך";
        else if (this.night && this.morning)
            time += "לילה ארוך";
        else if (this.morning)
            time += "בוקר";
        else if (this.afternoon)
            time += "ערב";
        else if (this.night)
            time += "לילה";

        if (!this.comment)
            return `יום ${this.name}, ${this.date.getDate()}.${this.date.getMonth() + 1}, ${time}`;
        else
            return `יום ${this.name}, ${this.date.getDate()}.${this.date.getMonth() + 1}, ${time}, ${this.comment}`;
    }
}
