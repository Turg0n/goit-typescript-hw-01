type NewUser = {
    name: string;
    surname: string;
    email: string;
    password: string;
  };
  
  function createOrUpdateUser(initialValues: Partial<NewUser>) {
    // Обновлення користувача
  }
  
  createOrUpdateUser({
    email: "user@mail.com",
    password: "password123",
  });