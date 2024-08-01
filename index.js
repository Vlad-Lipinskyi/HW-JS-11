// 1 завдання

const bankAccount = { 
    ownerName: "Vlad",
    accountNumber: 123,
    balance: 10000,
    deposit (numberDeposit) { 
      this.balance = this.balance + numberDeposit;
      return `На балансі залишилось ${this.balance}`;
    },
    withdraw (numberWithdraw) { 
      this.balance = this.balance - numberWithdraw;
      return `На балансі залишилось ${this.balance}`;
    }
  };
  
  const depositMoney = Number(prompt("На скільки хочете поповнити баланс Вашого банківського рахунку?"));
  const withdrawMoney = Number(prompt("Скільки хочете зняти готівки з Вашого банківського рахунку?"));
  
  if (depositMoney > 0) { 
    bankAccount.deposit(depositMoney);
  } else { 
    alert("Будь ласка поповніть Ваш банківській рахунок")
  }
  
  if (withdrawMoney > 0) { 1000
    bankAccount.withdraw(withdrawMoney);
  } else { 
    alert("Будь ласка зніміть готівку з Вашого банківського рахунку")
  }
  
  console.log(bankAccount);


  // 2 Завдання

let whichWeather = "";
const weather = { 
  temperature: 10,
  humidity: 0,
  windSpeed: 3,
  checkTemperature () { 
    if (this.temperature < 0) { 
      whichWeather = false;
    } else { 
      whichWeather = true;
    }
    return whichWeather;
  }
}

const whichTemperature = Number(prompt("Яка у вас температура?"));
weather.temperature = whichTemperature;
if (weather.checkTemperature() === false) { 
  alert("Температура нижче 0°C");
} else { 
  alert("Температура вище 0°C");
};


// 3 Завдання

const user = {
    name: "Vlad",
    email: "example@gmail.com",
    password: "123Vlad@@",
    login() {
        const email = prompt("Введіть Ваш email:");
        const password = prompt("Введіть Ваш пароль:");
        if (
            password.length > 4 &&
            email.includes("@") === true
        ) {
            this.email = email;
            this.password = password;
        } else alert("Ви не увійшли в аккаунт");
    },
};
user.login();
console.log(user)



// 4 Завдання 

const movie = { 
    title: "spider man no way home",
    director: "Jon Watts",
    year: 2022,
    rating: 8,
    checkRating () { 
      let whichRating = ""; 
      if (this.rating > 8) { 
        whichRating = true; 
      } else { 
        whichRating = false;
      }
      return whichRating;
    }
  }
  
  if (movie.checkRating() === true) { 
    alert("Оцінка фільму більше 8 зірок!");
  } else { 
    alert("Оцінка фільму менше або дорівнює 8 зірок!");
  }