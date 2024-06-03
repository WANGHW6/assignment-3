document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main section.checkout, main section.overlay');
    const nextButtons = document.querySelectorAll('.continue-button');
    const backButtons = document.querySelectorAll('.back-button');
    let currentSectionIndex = 0;

    // Initialize visibility
    sections.forEach((section, index) => {
        section.style.display = index === 0 ? 'flex' : 'none';
    });

    nextButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const currentSection = sections[currentSectionIndex];
            if (!validateSectionInputs(currentSection)) {
                alert('Please fill in all required fields.');
                return;
            }

            if (currentSectionIndex < sections.length - 1) {
                sections[currentSectionIndex].style.display = 'none';
                currentSectionIndex++;
                sections[currentSectionIndex].style.display = 'flex';

                if (currentSectionIndex === 3) {
                    sections[currentSectionIndex - 1].style.display = 'flex';
                    sections[currentSectionIndex].style.display = 'flex';
                }

                // Sync inputs
                syncInputs();
            }
        });
    });

    backButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (currentSectionIndex > 0) {
                sections[currentSectionIndex].style.display = 'none';
                currentSectionIndex--;
                sections[currentSectionIndex].style.display = 'flex';
            }
        });
    });

    // Validate section inputs, ignoring optional fields
    function validateSectionInputs(section) {
        const inputs = section.querySelectorAll('input, select');
        for (let input of inputs) {
            if ((input.type !== 'text' || input.id !== 'gift-card') && !input.disabled && input.type !== 'radio') {
                if (input.value.trim() === '') {
                    return false;
                }
            }
        }
        return true;
    }

    // Sync inputs
    function syncInputs() {
        const email = document.querySelector('main section:nth-of-type(1) #email').value;
        const country = document.querySelector('main section:nth-of-type(1) #country').value;
        const nameOnCard = document.querySelector('main section:nth-of-type(1) #name-on-card').value;
        const cardNumber = document.querySelector('main section:nth-of-type(1) #card-number').value;
        const expirationDate = document.querySelector('main section:nth-of-type(1) #expiration-date').value;
        const securityCode = document.querySelector('main section:nth-of-type(1) #security-code').value;

        document.querySelector('main section:nth-of-type(2) #contact').value = email;
        document.querySelector('main section:nth-of-type(2) #ship-to').value = country;

        document.querySelector('main section:nth-of-type(3) #contact').value = email;
        document.querySelector('main section:nth-of-type(3) #ship-to').value = country;
        document.querySelector('main section:nth-of-type(3) #name-on-card').value = nameOnCard;
        document.querySelector('main section:nth-of-type(3) #card-number').value = cardNumber;
        document.querySelector('main section:nth-of-type(3) #expiration-date').value = expirationDate;
        document.querySelector('main section:nth-of-type(3) #security-code').value = securityCode;

        // Only sync shipping method if the shipping method input exists in the second section
        const shippingMethodInput = document.querySelector('main section:nth-of-type(2) input[name="shipping"]:checked');
        if (shippingMethodInput) {
            const shippingMethod = shippingMethodInput.value;
            document.querySelector(`main section:nth-of-type(3) input[name="shipping"][value="${shippingMethod}"]`).checked = true;
        }
    }

    // Attach input event listeners to sync fields in real-time
    document.querySelectorAll('main section:nth-of-type(1) input, main section:nth-of-type(1) select').forEach(input => {
        input.addEventListener('input', syncInputs);
    });
});