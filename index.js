document.addEventListener('DOMContentLoaded', function() {
    const reportForm = document.getElementById('reportForm');
    reportForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const reportType = document.getElementById('report-type').value;
        const location = document.getElementById('location').value;
        const date = document.getElementById('date').value;
        const description = document.getElementById('description').value;
        const contact = document.getElementById('contact').value;
        
        console.log('Report submitted:', {
            reportType,
            location,
            date,
            description,
            contact
        });
        
        alert('Thank you for your report! It has been submitted for review.');
        reportForm.reset();
    });
    
    setTimeout(() => {
        const mapContainer = document.querySelector('.map-container');
        mapContainer.innerHTML += '<div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:#e9ecef;color:#6a3093;font-weight:bold;">Interactive Map Would Display Here</div>';
    }, 1000);
});