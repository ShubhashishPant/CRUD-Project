$(document).ready(function () {
    const apiUrl = 'http://localhost:5000/api/users';

    // Register user
    $('#registration-form').submit(function (e) {
        e.preventDefault();
        const name = $('#name').val();
        const email = $('#email').val();
        const password = $('#password').val();

        $.post('http://localhost:5000/api/auth/register', { name, email, password }, function (data) {
            if (data.success) {
                alert('User registered successfully');
                loadUsers();
            } else {
                alert(data.error);
            }
        });
    });

    // Load users
    function loadUsers() {
        $.get(apiUrl, function (data) {
            const tbody = $('#userTable tbody');
            tbody.empty();
            data.data.forEach(user => {
                tbody.append(`
                    <tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>
                            <button class="btn btn-info" onclick="viewUser('${user._id}')">View</button>
                            <button class="btn btn-danger" onclick="deleteUser('${user._id}')">Delete</button>
                        </td>
                    </tr>
                `);
            });
        });
    }

    loadUsers();

    // View user
    window.viewUser = function (userId) {
        $.get(`${apiUrl}/${userId}`, function (data) {
            if (data.success) {
                $('#user-name').text(data.data.name);
                $('#user-email').text(data.data.email);
                $('#userModal').modal('show');
            } else {
                alert(data.error);
            }
        });
    }

    // Delete user
    window.deleteUser = function (userId) {
        $.ajax({
            url: `${apiUrl}/${userId}`,
            type: 'DELETE',
            success: function (data) {
                if (data.success) {
                    alert('User deleted successfully');
                    loadUsers();
                } else {
                    alert(data.error);
                }
            }
        });
    }
});
