document.addEventListener("DOMContentLoaded", function() {
    const membersButton = document.getElementById('membersButton');
    const rolesButton = document.getElementById('rolesButton');
    const oneWorldButton = document.getElementById('oneWorldButton');
    const membersList = document.getElementById('membersList');
    const rolesList = document.getElementById('rolesList');
    const oneWorldList = document.getElementById('oneWorldList');

    membersButton.addEventListener('click', function() {
        membersList.classList.toggle('hidden');
        rolesList.classList.add('hidden');
        oneWorldList.classList.add('hidden');
    });

    rolesButton.addEventListener('click', function() {
        rolesList.classList.toggle('hidden');
        membersList.classList.add('hidden');
        oneWorldList.classList.add('hidden');
    });

    oneWorldButton.addEventListener('click', function() {
        oneWorldList.classList.toggle('hidden');
        membersList.classList.add('hidden');
        rolesList.classList.add('hidden');
    });
});
