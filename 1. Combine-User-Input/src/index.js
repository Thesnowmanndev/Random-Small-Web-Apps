const headerSection = document.getElementById("headerSection");
const formSection = document.getElementById("formSection");
const outputSection = document.getElementById("outputSection");
const footersection = document.getElementById("footersection");

const headerMarkup = `
    <div>
        <h1
        class="text-white dark:text-slate-900 text-base font-medium tracking-tight"
        >
            Howdy!
        </h1>
        <p class="text-slate-400 dark:text-slate-500 mt-2 text-sm">
            This is a simple Javascript application that will accept user input, combine into a string, and print out a message. Just fill out the form with your name (or leave it blank), hit submit, and I will handle the
            rest! The form does not submit data entered to any database, so don't worry about collecting information.
        </p>
    </div>`;

const footerMarkup = `
<footer
class="text-center text-white bg-slate-800 dark:text-slate-800 dark:bg-white"
>
    <div class="pt-8">
        <div
            class="text-center p-4 bg-slate-500 dark:bg-slate-200 dark:text-slate-800 rounded-lg flex flex-row justify-between"
        >
            <div>
                <p>
                    Check the code out on
                    <a
                    href="https://github.com/Thesnowmanndev/Random-Small-Web-Apps"
                    target="_blank"
                    class="underline decoration-slate-800 text-sky-500"
                    >
                    GitHub</a
                    >
                </p>
                </div>
                <div>
                    <p>Created 15 Jun 22</p>
                </div>
        </div>
    </div>
</footer>
`;

const formMarkup = `
    <div
    class="mt-4 px-4 py-2 rounded-lg border-2 border-white dark:border-slate-800 max-w-sm flex flex-col mx-auto"
    >
        <form action="" name="stringComboForm" id="stringComboForm" autocomplete="off">
            <div class="py-2">
                <label for="usersFirstNameInput" class="text-white dark:text-slate-600"
                >First Name:</label
                >
                <input
                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-red-500 focus:bg-white focus:ring-0 max-w-md text-slate-800"
                type="text"
                name="usersFirstNameInput"
                id="usersFirstNameInput"
                placeholder="Joe"
                />
                <label for="usersLastNameInput" class="text-white dark:text-slate-600"
                >Last Name:</label
                >
                <input
                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-red-500 focus:bg-white focus:ring-0 max-w-md text-slate-800"
                type="text"
                id="usersLastNameInput"
                name="usersLastNameInput"
                placeholder="Schmoe"
                />
                <label for="usersSuperheroInput" class="text-white dark:text-slate-600"
                >Favorite Superhero:</label
                >
                <input
                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-red-500 focus:bg-white focus:ring-0 max-w-md text-slate-800"
                type="text"
                id="usersSuperheroInput"
                name="usersSuperheroInput"
                placeholder="Spiderman"
                />
                <div class="text-center">
                    <button
                    type="button"
                    onclick="printMessage();"
                    class="inline-block my-4 px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full hover:shadow-lg hover:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-400 active:shadow-lg transition duration-150 ease-in-out"
                    >
                    submit
                    </button>
                </div>
            </div>
        </form>
    </div>
`;

function setHeader() {
  return (headerSection.innerHTML = headerMarkup);
}

function setFooter() {
  return (footersection.innerHTML = footerMarkup);
}

function generateForm() {
  return (formSection.innerHTML = formMarkup);
}

function initializeApp() {
  setHeader();
  setFooter();
  generateForm();
}

function validateForm(usersFirstName, usersLastName, usersSuperhero) {
  if (usersFirstName == "") {
    let usersFirstNameInput = document.getElementById("usersFirstNameInput");
    usersFirstNameInput.focus();
    return false;
  }

  if (usersLastName == "") {
    let usersLastNameInput = document.getElementById("usersLastNameInput");
    usersLastNameInput.focus();
    return false;
  }

  if (usersSuperhero == "") {
    let usersSuperheroInput = document.getElementById("usersSuperheroInput");
    usersSuperheroInput.focus();
    return false;
  }

  return true;
}

function printMessage() {
  let usersFirstName = document
    .getElementById("usersFirstNameInput")
    .value.trim();
  let usersLastName = document
    .getElementById("usersLastNameInput")
    .value.trim();
  let usersSuperhero = document
    .getElementById("usersSuperheroInput")
    .value.trim();

  let formValid = validateForm(usersFirstName, usersLastName, usersSuperhero);

  if (!formValid) {
    usersFirstName = "Joe";
    usersLastName = "Schmoe";
    usersSuperhero = "Spiderman";
  }

  return (outputSection.innerHTML =
    usersFirstName +
    " " +
    usersLastName +
    "'s favorite superhero is " +
    usersSuperhero +
    ".");
}

initializeApp();
