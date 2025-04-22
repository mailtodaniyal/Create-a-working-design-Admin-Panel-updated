        document.addEventListener('DOMContentLoaded', function() {
            const modal = document.getElementById('reportModal');
            const viewButtons = document.querySelectorAll('.action-btn.view');
            const closeButtons = document.querySelectorAll('.modal-close, .cancel');
            
            viewButtons.forEach(button => {
                button.addEventListener('click', function() {
                    modal.classList.add('active');
                });
            });
            
            closeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    modal.classList.remove('active');
                });
            });
            
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
            
            setTimeout(() => {
                const cards = document.querySelectorAll('.card');
                cards.forEach(card => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                });
            }, 300);
        });
