const headerSection = document.getElementById("headerSection");
const formSection = document.getElementById("formSection");
const greetingMessage = document.getElementById("greetingMessage");
const footerSection = document.getElementById("footerSection");

const headerMarkup = `
    <div>
        <h1
        class="text-white dark:text-slate-900 text-base font-medium tracking-tight"
        >
            Greetings!
        </h1>
        <p class="text-slate-400 dark:text-slate-500 mt-2 text-sm">
            This is a simple Javascript application that will say hello to
            you. Just fill out the form with your name (or leave it blank), hit submit, and I will handle the
            rest! The form does not submit data entered to any database, so don't worry about collecting information.
        </p>
    </div>`;

const formMarkup = `
    <div
    class="mt-4 px-4 py-2 rounded-lg border-2 border-white dark:border-slate-800 max-w-sm flex flex-col mx-auto"
    >
        <form action="" id="userNameForm" autocomplete="off">
            <div class="py-2">
                <label for="usersName" class="text-white dark:text-slate-600"
                >Name:</label
                >
                <input
                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 max-w-md"
                type="text"
                id="usersNameInput"
                placeholder="World"
                />
                <div class="text-center">
                    <button
                    type="button"
                    onclick="printGreeting();"
                    class="inline-block my-4 px-6 py-2 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full hover:shadow-lg hover:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
                    >
                    submit
                    </button>
                </div>
            </div>
        </form>
    </div>
`;

const footerMarkup = `
<footer
class="text-center text-white bg-slate-900 dark:text-slate-800 dark:bg-white"
>
    <div class="pt-8">
        <div
            class="text-center p-4 bg-slate-200 rounded-lg flex flex-row justify-between"
        >
            <div>
                <p>
                    Check the code out on
                    <a
                    href="https://github.com/Thesnowmanndev/Random-Small-Web-Apps/tree/main/0.%20Hello-World"
                    target="_blank"
                    class="underline decoration-slate-800 text-sky-500"
                    >
                    GitHub</a
                    >
                </p>
                </div>
                <div>
                    <p>Created 14 Jun 22</p>
                </div>
        </div>
    </div>
</footer>
`;

function setHeader() {
  return (headerSection.innerHTML = headerMarkup);
}

function generateForm() {
  return (formSection.innerHTML = formMarkup);
}

function setFooter() {
  return (footerSection.innerHTML = footerMarkup);
}

function printGreeting() {
  let usersName = document.getElementById("usersNameInput").value.trim();

  if (usersName == "") {
    usersName = "World";
  }

  return (greetingMessage.innerHTML = "Hello, " + usersName + "!");
}

function initializeApp() {
  setHeader();
  generateForm();
  setFooter();
}

initializeApp();
