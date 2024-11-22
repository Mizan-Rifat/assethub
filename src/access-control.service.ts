enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  FREELANCER = 'freelancer',
  ARCHIVIST = 'archivist'
}

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

abstract class RBACManager {
  abstract addUser(user: User): void;
  abstract removeUser(userId: string): void;
  abstract assignRole(userId: string, role: UserRole): void;
  abstract checkPermission(userId: string, requiredRole: UserRole): boolean;
}
