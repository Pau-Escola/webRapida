import React from 'react';
import { Trans } from 'react-i18next';

const LegalPolicies = () => {
    return (
        <div className="legal-policies-container" style={{ padding: '20px', lineHeight: '1.6' }}>
            <p><Trans i18nKey="Cookies" /></p>
        </div>
    );
};

export default LegalPolicies;
