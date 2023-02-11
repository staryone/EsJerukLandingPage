import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

  <div>
    <div class="grid h-screen place-items-center">
    <div class="card lg:card-side bg-base-100 shadow-xl">
    <figure><img class="w-60 h-30" src="https://media.istockphoto.com/id/846288120/photo/modern-glass-silhouettes-of-skyscrapers.jpg?b=1&s=170667a&w=0&k=20&c=J0m_o6pI6NGd6yi49IN5gGituaCh0-SIgxtk4Okdqa0=" alt="Album"/></figure>
    <div class="card-body">
      <h1 class="font-sans font-bold text-2xl">Login Page</h1>
      <p>Joko</p>

 <form onsubmit="return false">
      <input type="text" placeholder="Username" id="username" class="input input-bordered w-full max-w-xs mt-8" required/>
      <input type="password" placeholder="Password" id="password" class="input input-bordered w-full max-w-xs mt-4" required/>

      <div class="card-actions justify-end">
        <button id="loginButton" class="btn btn-primary mt-8" type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
    </div>
    <script>
  </div>
`

let username = <HTMLInputElement>document.getElementById("username");
let password = <HTMLInputElement>document.getElementById("password");
let loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", handleClick);
  
function handleClick(){
    const value = [username.value , password.value];
  for (let i=0; i<value.length; i++){
    console.log(value[i]);
  }
}