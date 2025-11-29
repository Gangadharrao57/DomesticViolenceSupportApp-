interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  createdAt: string;
}

interface CurrentUser {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

interface Message {
  id: string;
  userId: string;
  text: string;
  timestamp: string;
  isSupport: boolean;
}

interface Report {
  id: string;
  userId: string;
  type: string;
  description: string;
  status: string;
  createdAt: string;
}

export const storageService = {
  // Users
  getUsers(): User[] {
    const users = localStorage.getItem('dv-users');
    return users ? JSON.parse(users) : [];
  },

  addUser(user: User): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem('dv-users', JSON.stringify(users));
  },

  // Current User
  getCurrentUser(): CurrentUser | null {
    const user = localStorage.getItem('dv-current-user');
    return user ? JSON.parse(user) : null;
  },

  setCurrentUser(user: CurrentUser): void {
    localStorage.setItem('dv-current-user', JSON.stringify(user));
  },

  clearCurrentUser(): void {
    localStorage.removeItem('dv-current-user');
  },

  // Messages (Chat)
  getMessages(userId: string): Message[] {
    const messages = localStorage.getItem(`dv-messages-${userId}`);
    return messages ? JSON.parse(messages) : [];
  },

  addMessage(userId: string, message: Message): void {
    const messages = this.getMessages(userId);
    messages.push(message);
    localStorage.setItem(`dv-messages-${userId}`, JSON.stringify(messages));
  },

  // Reports
  getReports(userId: string): Report[] {
    const reports = localStorage.getItem(`dv-reports-${userId}`);
    return reports ? JSON.parse(reports) : [];
  },

  addReport(userId: string, report: Report): void {
    const reports = this.getReports(userId);
    reports.push(report);
    localStorage.setItem(`dv-reports-${userId}`, JSON.stringify(reports));
  },

  updateReport(userId: string, reportId: string, updates: Partial<Report>): void {
    const reports = this.getReports(userId);
    const index = reports.findIndex(r => r.id === reportId);
    if (index !== -1) {
      reports[index] = { ...reports[index], ...updates };
      localStorage.setItem(`dv-reports-${userId}`, JSON.stringify(reports));
    }
  },

  deleteReport(userId: string, reportId: string): void {
    const reports = this.getReports(userId);
    const filtered = reports.filter(r => r.id !== reportId);
    localStorage.setItem(`dv-reports-${userId}`, JSON.stringify(filtered));
  }
};
