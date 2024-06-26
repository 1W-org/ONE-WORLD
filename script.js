document.addEventListener('DOMContentLoaded', () => {
    const membersButton = document.getElementById('membersButton');
    const rolesButton = document.getElementById('rolesButton');
    const oneWorldButton = document.getElementById('oneWorldButton');

    const membersList = document.getElementById('membersList');
    const rolesList = document.getElementById('rolesList');
    const oneWorldList = document.getElementById('oneWorldList');

    membersButton.addEventListener('click', () => {
        membersList.classList.toggle('show');
    });

    rolesButton.addEventListener('click', () => {
        rolesList.classList.toggle('show');
    });

    oneWorldButton.addEventListener('click', () => {
        oneWorldList.classList.toggle('show');
    });
});
