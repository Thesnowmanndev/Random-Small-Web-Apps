class Employee {
  picture;
  firstName;
  lastName;
  dutyTitle;

  skillOne;
  skillTwo;
  skillThree;
  skillFour;
  skillFive;

  skillOneValue;
  skillTwoValue;
  skillThreeValue;
  skillFourValue;
  skillFiveValue;

  constructor(
    picture,
    firstName,
    lastName,
    dutyTitle,
    skillOne,
    skillOneValue,
    skillTwo,
    skillTwoValue,
    skillThree,
    skillThreeValue,
    skillFour,
    skillFourValue,
    skillFive,
    skillFiveValue
  ) {
    this.picture = picture;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dutyTitle = dutyTitle;
    this.skillOne = skillOne;
    this.skillTwo = skillTwo;
    this.skillThree = skillThree;
    this.skillFour = skillFour;
    this.skillFive = skillFive;
    this.skillOneValue = skillOneValue;
    this.skillTwoValue = skillTwoValue;
    this.skillThreeValue = skillThreeValue;
    this.skillFourValue = skillFourValue;
    this.skillFiveValue = skillFiveValue;
  }
}

const teamLeader = new Employee(
  "./images/Employees/lucy.png",
  "Lucy",
  "Smith",
  "Project Manager",
  "Public Affiars",
  70,
  "SCRUM",
  60,
  "Fund Management",
  90,
  "Project Tracking",
  60,
  "Communication",
  75
);

const teamMemberOne = new Employee(
  "./images/Employees/matt.jpg",
  "Matt",
  "Thompson",
  "Front-End Developer",
  "JavaScript",
  90,
  "Frameworks",
  80,
  "Unit Testing",
  50,
  "Design",
  70,
  "Communication",
  65
);

const teamMemberTwo = new Employee(
  "./images/Employees/billy.jpg",
  "Billy",
  "Conlin",
  "Back-End Developer",
  "C Language",
  90,
  "Python",
  85,
  "Unit Testing",
  95,
  "Server Admin",
  75,
  "Communication",
  65
);

let empOnline = `ring-success`;
let empOffline = `ring-secondary`;

export let employeeOneCard = `
<div
    class="bg-base-100 grid w-full flex-grow gap-3 rounded-xl rounded-t1-none p-6 shadow-xl"
  >
    <div class="flex items-center space-x-2">
      <div class="avatar">
        <div
          class="w-16 rounded-full ring ${empOnline} ring-offset-base-100 ring-offset-2"
        >
          <img src="${teamLeader.picture}" />
        </div>
      </div>
      <div class="pl-2">
        <div class="text-lg font-bold">${teamLeader.firstName} ${teamLeader.lastName}</div>
        <div class="text-base-content/70 text-sm">${teamLeader.dutyTitle}</div>
      </div>
    </div>
    <div class="divider">Metrics</div>
    <div class="text-lg font-extrabold">Employee Skills</div>
    <div class="grid gap-3">
      <div class="flex items-center p-1">
        <span class="text-base-content/70 w-48 text-xs"
          >${teamLeader.skillOne}</span
        >
        <progress
          max="100"
          class="progress progress-primary"
          value="${teamLeader.skillOneValue}"
        ></progress>
      </div>
      <div class="flex items-center p-1">
        <span class="text-base-content/70 w-48 text-xs"
          >${teamLeader.skillTwo}</span
        >
        <progress
          max="100"
          class="progress progress-accent"
          value="${teamLeader.skillTwoValue}"
        ></progress>
      </div>
      <div class="flex items-center p-1">
        <span class="text-base-content/70 w-48 text-xs"
          >${teamLeader.skillThree}</span
        >
        <progress
          max="100"
          class="progress progress-info"
          value="${teamLeader.skillThreeValue}"
        ></progress>
      </div>
      <div class="flex items-center p-1">
        <span class="text-base-content/70 w-48 text-xs"
          >${teamLeader.skillFour}</span
        >
        <progress
          max="100"
          class="progress progress-secondary"
          value="${teamLeader.skillFourValue}"
        ></progress>
      </div>
      <div class="flex items-center p-1">
        <span class="text-base-content/70 w-48 text-xs"
          >${teamLeader.skillFive}</span
        >
        <progress
          max="100"
          class="progress progress-success"
          value="${teamLeader.skillFiveValue}"
        ></progress>
      </div>
    </div>
  </div>
`;

export let employeeTwoCard = `
<div
    class="bg-base-100 grid w-full flex-grow gap-3 rounded-xl rounded-t1-none p-6 shadow-xl"
  >
    <div class="flex items-center space-x-2">
      <div class="avatar">
        <div
          class="w-16 rounded-full ring ${empOffline} ring-offset-base-100 ring-offset-2"
        >
          <img src="${teamMemberOne.picture}" />
        </div>
      </div>
      <div class="pl-2">
        <div class="text-lg font-bold">${teamMemberOne.firstName} ${teamMemberOne.lastName}</div>
        <div class="text-base-content/70 text-sm">${teamMemberOne.dutyTitle}</div>
      </div>
    </div>
    <div class="divider">Metrics</div>
    <div class="text-lg font-extrabold">Employee Skills</div>
    <div class="grid gap-3">
      <div class="flex items-center p-1">
        <span class="text-base-content/70 w-48 text-xs"
          >${teamMemberOne.skillOne}</span
        >
        <progress
          max="100"
          class="progress progress-primary"
          value="${teamMemberOne.skillOneValue}"
        ></progress>
      </div>
      <div class="flex items-center p-1">
        <span class="text-base-content/70 w-48 text-xs"
          >${teamMemberOne.skillTwo}</span
        >
        <progress
          max="100"
          class="progress progress-accent"
          value="${teamMemberOne.skillTwoValue}"
        ></progress>
      </div>
      <div class="flex items-center p-1">
        <span class="text-base-content/70 w-48 text-xs"
          >${teamMemberOne.skillThree}</span
        >
        <progress
          max="100"
          class="progress progress-info"
          value="${teamMemberOne.skillThreeValue}"
        ></progress>
      </div>
      <div class="flex items-center p-1">
        <span class="text-base-content/70 w-48 text-xs"
          >${teamMemberOne.skillFour}</span
        >
        <progress
          max="100"
          class="progress progress-secondary"
          value="${teamMemberOne.skillFourValue}"
        ></progress>
      </div>
      <div class="flex items-center p-1">
        <span class="text-base-content/70 w-48 text-xs"
          >${teamMemberOne.skillFive}</span
        >
        <progress
          max="100"
          class="progress progress-success"
          value="${teamMemberOne.skillFiveValue}"
        ></progress>
      </div>
    </div>
  </div>
`;

export let employeeThreeCard = `
<div
    class="bg-base-100 grid w-full flex-grow gap-3 rounded-xl rounded-t1-none p-6 shadow-xl"
  >
    <div class="flex items-center space-x-2">
      <div class="avatar">
        <div
          class="w-16 rounded-full ring ${empOnline} ring-offset-base-100 ring-offset-2"
        >
          <img src="${teamMemberTwo.picture}" />
        </div>
      </div>
      <div class="pl-2">
        <div class="text-lg font-bold">${teamMemberTwo.firstName} ${teamMemberTwo.lastName}</div>
        <div class="text-base-content/70 text-sm">${teamMemberTwo.dutyTitle}</div>
      </div>
    </div>
    <div class="divider">Metrics</div>
    <div class="text-lg font-extrabold">Employee Skills</div>
    <div class="grid gap-3">
      <div class="flex items-center p-1">
        <span class="text-base-content/70 w-48 text-xs"
          >${teamMemberTwo.skillOne}</span
        >
        <progress
          max="100"
          class="progress progress-primary"
          value="${teamMemberTwo.skillOneValue}"
        ></progress>
      </div>
      <div class="flex items-center p-1">
        <span class="text-base-content/70 w-48 text-xs"
          >${teamMemberTwo.skillTwo}</span
        >
        <progress
          max="100"
          class="progress progress-accent"
          value="${teamMemberTwo.skillTwoValue}"
        ></progress>
      </div>
      <div class="flex items-center p-1">
        <span class="text-base-content/70 w-48 text-xs"
          >${teamMemberTwo.skillThree}</span
        >
        <progress
          max="100"
          class="progress progress-info"
          value="${teamMemberTwo.skillThreeValue}"
        ></progress>
      </div>
      <div class="flex items-center p-1">
        <span class="text-base-content/70 w-48 text-xs"
          >${teamMemberTwo.skillFour}</span
        >
        <progress
          max="100"
          class="progress progress-secondary"
          value="${teamMemberTwo.skillFourValue}"
        ></progress>
      </div>
      <div class="flex items-center p-1">
        <span class="text-base-content/70 w-48 text-xs"
          >${teamMemberTwo.skillFive}</span
        >
        <progress
          max="100"
          class="progress progress-success"
          value="${teamMemberTwo.skillFiveValue}"
        ></progress>
      </div>
    </div>
  </div>
`;
