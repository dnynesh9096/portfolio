/**
 * Simulates sending an email via a contact form.
 * Can be easily integrated with EmailJS, SendGrid, or custom backends.
 * 
 * @param {Object} emailData
 * @param {string} emailData.name
 * @param {string} emailData.email
 * @param {string} emailData.subject
 * @param {string} emailData.message
 * @returns {Promise<boolean>}
 */
export const sendEmail = async (emailData) => {
  return new Promise((resolve, reject) => {
    // Simulate API network latency
    setTimeout(() => {
      // Mock validation checking
      if (!emailData.name || !emailData.email || !emailData.message) {
        reject(new Error('Missing required fields'));
        return;
      }
      
      // Simulate success 95% of the time, failure 5% for testing error states
      const isSuccess = Math.random() < 0.98;
      if (isSuccess) {
        console.log('Email sent successfully:', emailData);
        resolve(true);
      } else {
        reject(new Error('Internal network error. Please try again.'));
      }
    }, 1500);
  });
};
