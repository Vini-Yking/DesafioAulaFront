const btnLogin = document.querySelector("#btn-login");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const emailcadastrado = "teste@teste.com";
const senhacadastrada = "123456";
const handleLogin = () => {
  //   console.log(`email: ${email.value}`);
  //   console.log(`senha: ${password.value}`);
  emailcadastrado === email.value && senhacadastrada === password.value
    ? (window.location.href = "registro.html")
    : alert("Senha invalida");
};

btnLogin.addEventListener("click", handleLogin);
