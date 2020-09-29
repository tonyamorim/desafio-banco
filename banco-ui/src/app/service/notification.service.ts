import { Message } from 'primeng/primeng';
import {Injectable} from "@angular/core";

@Injectable()
export class NotificationService {
    message: Message[];

    constructor() {
        this.message = [];
    }

    success(detail: string, summary?: string): void {
        this.message = [];
        this.message.push({
            severity: 'success', summary: summary, detail: detail
        });
    }

    info(detail: string, summary?: string): void {
        this.message = [];
        this.message.push({
            severity: 'info', summary: summary, detail: detail
        });
    }

    warning(detail: string, summary?: string): void {
        this.message = [];
        this.message.push({
            severity: 'warn', summary: summary, detail: detail
        });
    }

    error(detail: string, summary?: string): void {
        this.message = [];
        this.message.push({
            severity: 'error', summary: summary, detail: detail
        });
    }

    clear() {
        this.message = [];
    }

}
