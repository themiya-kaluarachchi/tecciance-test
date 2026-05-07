CREATE TABLE users (
                       id BIGSERIAL PRIMARY KEY,
                       name VARCHAR(100) NOT NULL,
                       email VARCHAR(255) UNIQUE NOT NULL,
                       password_hash TEXT NOT NULL,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
                            id BIGSERIAL PRIMARY KEY,

                            user_id BIGINT NOT NULL,

                            name VARCHAR(100) NOT NULL,

                            color VARCHAR(7),

                            monthly_budget DECIMAL(10,2),

                            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                            updated_at TIMESTAMP,
                            deleted_at TIMESTAMP,

                            CONSTRAINT fk_category_user
                                FOREIGN KEY(user_id)
                                    REFERENCES users(id)
);

CREATE TABLE expenses (
                          id BIGSERIAL PRIMARY KEY,

                          user_id BIGINT NOT NULL,

                          category_id BIGINT NOT NULL,

                          amount DECIMAL(10,2) NOT NULL CHECK(amount >= 0),

                          description TEXT,

                          expense_date DATE NOT NULL,

                          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                          updated_at TIMESTAMP,
                          deleted_at TIMESTAMP,

                          CONSTRAINT fk_expense_user
                              FOREIGN KEY(user_id)
                                  REFERENCES users(id),

                          CONSTRAINT fk_expense_category
                              FOREIGN KEY(category_id)
                                  REFERENCES categories(id)
);