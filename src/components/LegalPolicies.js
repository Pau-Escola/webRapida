import React from 'react';
import { useTranslation } from 'react-i18next';

const LegalPolicies = () => {
    const { t } = useTranslation();

    return (
        <div className="legal-policies-container" style={{ padding: '20px', lineHeight: '1.6' }}>
            <h1 className="font-bold text-2xl">{t('legalNoticeTitle')}</h1>
            <br />
            <h2 className="font-semibold text-xl">{t('ownershipTitle')}</h2>
            <p>{t('ownershipContent')}</p>
            <br />
            <h2 className="font-semibold text-xl">{t('personalDataTitle')}</h2>
            <p>{t('personalDataContent')}</p>
            <br />
            <h2 className="font-semibold text-xl">{t('cookiesTitle')}</h2>
            <p>{t('cookiesContent')}</p>
            <br />
            <h2 className="font-semibold text-xl">{t('dataRightsTitle')}</h2>
            <p>{t('dataRightsContent')}</p>
            <br />
            <h2 className="font-semibold text-xl">{t('securityTitle')}</h2>
            <p>{t('securityContent')}</p>
        </div>
    );
};

export default LegalPolicies;
