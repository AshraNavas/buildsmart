const professionals = [
    { name: "Alice Vance", trade: "Architect", phone: "555-0101", email: "alice@design.com" },
    { name: "Bob Sparks", trade: "Electrician", phone: "555-0202", email: "bob@power.com" },
    { name: "Charlie Stone", trade: "Masonry", phone: "555-0303", email: "charlie@bricks.com" },
    { name: "Diana Draft", trade: "Interior Designer", phone: "555-0404", email: "diana@interiors.com" }
];

const container = document.getElementById('directory');
const searchInput = document.getElementById('searchInput');

function displayPros(filter = "") {
    container.innerHTML = "";
    const filtered = professionals.filter(p => 
        p.trade.toLowerCase().includes(filter.toLowerCase()) || 
        p.name.toLowerCase().includes(filter.toLowerCase())
    );

    filtered.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <span class="trade">${p.trade}</span>
                <h3>${p.name}</h3>
                <p>Available for new projects.</p>
                <a href="tel:${p.phone}" class="contact">📞 Call ${p.phone}</a>
                <a href="mailto:${p.email}" class="contact">✉️ Email Professional</a>
            </div>
        `;
    });
}

searchInput.addEventListener('input', (e) => displayPros(e.target.value));

// Initial Load
displayPros();