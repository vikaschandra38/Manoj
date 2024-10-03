const ID = "29118256980040369";
const PERSON_PREFIX = "pe";
const MEDICAID_PREFIX = "mh";
const MEDICAID_MAGIE_PREFIX = "e2";
const MEDICAID_NONIMAGE_PREFIX = "e4";
const MEDICAID_EMERGENCY_PREFIX = "e1";
const CHIP_ELIGIBILITY_PREFIX = "e3";
const VERIFICATION_META_PREFIX = "vm";
const APTCE_PREFIX = "e5";
const EXCHANGE_ELIGIBILITY_PREFIX = "e5";
const IDENTITY_PREFIX = "FFM";
const IDENTITY = "624891871242463";
const TOTAL = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const names = [
  { firstName: "James", lastName: "Smith" },
  { firstName: "Mary", lastName: "Johnson" },
  { firstName: "John", lastName: "Williams" },
  { firstName: "Patricia", lastName: "Brown" },
  { firstName: "Robert", lastName: "Jones" },
  { firstName: "Linda", lastName: "Garcia" },
  { firstName: "Michael", lastName: "Miller" },
  { firstName: "Barbara", lastName: "Davis" },
  { firstName: "William", lastName: "Rodriguez" },
  { firstName: "Elizabeth", lastName: "Martinez" },
  { firstName: "David", lastName: "Hernandez" },
  { firstName: "Jennifer", lastName: "Lopez" },
  { firstName: "Joseph", lastName: "Gonzalez" },
  { firstName: "Susan", lastName: "Wilson" },
  { firstName: "Charles", lastName: "Anderson" },
];

function InsuranceApplicant() {
  return TOTAL.map(
    (number) =>
      `<ns5:InsuranceApplicant>
          <ns4:RoleOfPersonReference ns1:ref="${PERSON_PREFIX}${ID}${number}" />
          <ns5:InsuranceApplicantBlindnessOrDisabilityIndicator>false</ns5:InsuranceApplicantBlindnessOrDisabilityIndicator>
          <ns5:InsuranceApplicantFixedAddressIndicator>true</ns5:InsuranceApplicantFixedAddressIndicator>
          <ns5:InsuranceApplicantIncarceration>
            <ns4:IncarcerationIndicator>false</ns4:IncarcerationIndicator>
          </ns5:InsuranceApplicantIncarceration>
          <ns5:InsuranceApplicantLongTermCareIndicator>false</ns5:InsuranceApplicantLongTermCareIndicator>
          <ns5:InsuranceApplicantNonESICoverageIndicator>false</ns5:InsuranceApplicantNonESICoverageIndicator>
          <ns5:InsuranceApplicantStateBenefitsThroughPublicEmployeeIndicator>false</ns5:InsuranceApplicantStateBenefitsThroughPublicEmployeeIndicator>
          <ns5:MedicaidMAGIEligibility ns1:id="${MEDICAID_MAGIE_PREFIX}${ID}${number}">
            <ns5:EligibilityDetermination>
              <ns2:ActivityDate>
                <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
              </ns2:ActivityDate>
            </ns5:EligibilityDetermination>
            <ns5:EligibilityReasonText>106</ns5:EligibilityReasonText>
            <ns5:EligibilityIndicator>false</ns5:EligibilityIndicator>
            <ns5:EligibilityEstablishingSystem>
              <ns4:InformationExchangeSystemCategoryCode>Exchange</ns4:InformationExchangeSystemCategoryCode>
            </ns5:EligibilityEstablishingSystem>
            <ns5:MedicaidHouseholdReference ns1:ref="${MEDICAID_PREFIX}${ID}${number}" />
            <ns5:MedicaidMAGIIncomeEligibilityBasis>
              <ns4:StatusIndicator>false</ns4:StatusIndicator>
              <ns5:EligibilityBasisStatusCode>Complete</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisIneligibilityReasonText>359</ns5:EligibilityBasisIneligibilityReasonText>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:31:24.891-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
              <ns5:IncomeEligibilityBasisStateThresholdFPLPercent>151</ns5:IncomeEligibilityBasisStateThresholdFPLPercent>
            </ns5:MedicaidMAGIIncomeEligibilityBasis>
            <ns5:MedicaidMAGIResidencyEligibilityBasis>
              <ns4:StatusIndicator>true</ns4:StatusIndicator>
              <ns5:EligibilityBasisStatusCode>Complete</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
              <ns5:MedicaidResidencyEligibilityBasisStudentRuleIndicator>false</ns5:MedicaidResidencyEligibilityBasisStudentRuleIndicator>
              <ns5:MedicaidResidencyEligibilityBasisCorrectStateIndicator>true</ns5:MedicaidResidencyEligibilityBasisCorrectStateIndicator>
            </ns5:MedicaidMAGIResidencyEligibilityBasis>
            <ns5:MedicaidMAGIParentCaretakerCategoryEligibilityBasis>
              <ns4:StatusIndicator>false</ns4:StatusIndicator>
              <ns5:EligibilityBasisStatusCode>Complete</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisIneligibilityReasonText>146</ns5:EligibilityBasisIneligibilityReasonText>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:MedicaidMAGIParentCaretakerCategoryEligibilityBasis>
            <ns5:MedicaidMAGIChildCategoryEligibilityBasis>
              <ns4:StatusIndicator>true</ns4:StatusIndicator>
              <ns5:EligibilityBasisStatusCode>Complete</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:MedicaidMAGIChildCategoryEligibilityBasis>
            <ns5:MedicaidMAGIAdultGroupCategoryEligibilityBasis>
              <ns4:StatusIndicator>false</ns4:StatusIndicator>
              <ns5:EligibilityBasisStatusCode>Complete</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisIneligibilityReasonText>123</ns5:EligibilityBasisIneligibilityReasonText>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:MedicaidMAGIAdultGroupCategoryEligibilityBasis>
            <ns5:MedicaidMAGIAdultGroupXXCategoryEligibilityBasis>
              <ns5:EligibilityBasisStatusCode>NotApplicable</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisIneligibilityReasonText>586</ns5:EligibilityBasisIneligibilityReasonText>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:MedicaidMAGIAdultGroupXXCategoryEligibilityBasis>
            <ns5:MedicaidMAGIOptionalTargetedLowIncomeChildEligibilityBasis>
              <ns4:StatusIndicator>true</ns4:StatusIndicator>
              <ns5:EligibilityBasisStatusCode>Complete</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:MedicaidMAGIOptionalTargetedLowIncomeChildEligibilityBasis>
            <ns5:MedicaidMAGICitizenOrImmigrantEligibilityBasis>
              <ns4:StatusIndicator>true</ns4:StatusIndicator>
              <ns5:EligibilityBasisStatusCode>Complete</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:MedicaidMAGICitizenOrImmigrantEligibilityBasis>
            <ns5:MedicaidMAGI-CHIPRA214EligibilityBasis>
              <ns5:EligibilityBasisStatusCode>NotApplicable</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisIneligibilityReasonText>612</ns5:EligibilityBasisIneligibilityReasonText>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:MedicaidMAGI-CHIPRA214EligibilityBasis>
            <ns5:MedicaidMAGISevenYearLimitEligibilityBasis>
              <ns5:EligibilityBasisStatusCode>NotApplicable</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisIneligibilityReasonText>569</ns5:EligibilityBasisIneligibilityReasonText>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:MedicaidMAGISevenYearLimitEligibilityBasis>
            <ns5:MedicaidMAGIFormerFosterCareCategoryEligibilityBasis>
              <ns4:StatusIndicator>false</ns4:StatusIndicator>
              <ns5:EligibilityBasisStatusCode>Complete</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisIneligibilityReasonText>647</ns5:EligibilityBasisIneligibilityReasonText>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:MedicaidMAGIFormerFosterCareCategoryEligibilityBasis>
            <ns5:MedicaidMAGIFiveYearBarEligibilityBasis>
              <ns5:EligibilityBasisStatusCode>NotApplicable</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisIneligibilityReasonText>569</ns5:EligibilityBasisIneligibilityReasonText>
            </ns5:MedicaidMAGIFiveYearBarEligibilityBasis>
          </ns5:MedicaidMAGIEligibility>
          <ns5:EmergencyMedicaidEligibility ns1:id="${MEDICAID_EMERGENCY_PREFIX}${ID}${number}">
            <ns5:MedicaidHouseholdReference ns1:ref="${MEDICAID_PREFIX}${ID}${number}" />
            <ns5:EmergencyMedicaidIncomeEligibilityBasis>
              <ns4:StatusIndicator>false</ns4:StatusIndicator>
              <ns5:EligibilityBasisStatusCode>Complete</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisIneligibilityReasonText>359</ns5:EligibilityBasisIneligibilityReasonText>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:31:24.891-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:EmergencyMedicaidIncomeEligibilityBasis>
          </ns5:EmergencyMedicaidEligibility>
          <ns5:CHIPEligibility ns1:id="${CHIP_ELIGIBILITY_PREFIX}${ID}${number}">
            <ns5:EligibilityDateRange>
              <ns2:StartDate>
                <ns2:Date>2024-09-30</ns2:Date>
              </ns2:StartDate>
            </ns5:EligibilityDateRange>
            <ns5:EligibilityDetermination>
              <ns2:ActivityDate>
                <ns2:DateTime>2024-09-30T14:31:24.891-04:00</ns2:DateTime>
              </ns2:ActivityDate>
            </ns5:EligibilityDetermination>
            <ns5:EligibilityReasonText>302</ns5:EligibilityReasonText>
            <ns5:EligibilityIndicator>true</ns5:EligibilityIndicator>
            <ns5:EligibilityEstablishingSystem>
              <ns4:InformationExchangeSystemCategoryCode>Exchange</ns4:InformationExchangeSystemCategoryCode>
            </ns5:EligibilityEstablishingSystem>
            <ns5:CHIPIncomeEligibilityBasis>
              <ns5:EligibilityBasisStatusCode>Pending</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisInconsistencyReasonText>359</ns5:EligibilityBasisInconsistencyReasonText>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:29:22.270-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
              <ns5:IncomeEligibilityBasisStateThresholdFPLPercent>301</ns5:IncomeEligibilityBasisStateThresholdFPLPercent>
            </ns5:CHIPIncomeEligibilityBasis>
            <ns5:CHIPMedicaidResidencyEligibilityBasis>
              <ns4:StatusIndicator>true</ns4:StatusIndicator>
              <ns5:EligibilityBasisStatusCode>Complete</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
              <ns5:MedicaidResidencyEligibilityBasisCorrectStateIndicator>true</ns5:MedicaidResidencyEligibilityBasisCorrectStateIndicator>
            </ns5:CHIPMedicaidResidencyEligibilityBasis>
            <ns5:CHIPIncarcerationEligibilityBasis>
              <ns4:StatusIndicator>false</ns4:StatusIndicator>
              <ns5:EligibilityBasisStatusCode>Complete</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:31:24.891-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:CHIPIncarcerationEligibilityBasis>
            <ns5:CHIPPregnancyCategoryEligibilityBasis>
              <ns5:EligibilityBasisStatusCode>NotApplicable</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisIneligibilityReasonText>599</ns5:EligibilityBasisIneligibilityReasonText>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:24:31.568-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:CHIPPregnancyCategoryEligibilityBasis>
            <ns5:CHIPTargetedLowIncomeChildEligibilityBasis>
              <ns4:StatusIndicator>true</ns4:StatusIndicator>
              <ns5:EligibilityBasisStatusCode>Complete</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:CHIPTargetedLowIncomeChildEligibilityBasis>
            <ns5:CHIPUnbornChildCategoryEligibilityBasis>
              <ns5:EligibilityBasisStatusCode>NotApplicable</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisIneligibilityReasonText>555</ns5:EligibilityBasisIneligibilityReasonText>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:31:24.891-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:CHIPUnbornChildCategoryEligibilityBasis>
            <ns5:CHIPStateHealthBenefitsEligibilityBasis>
              <ns5:EligibilityBasisStatusCode>NotApplicable</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisIneligibilityReasonText>654</ns5:EligibilityBasisIneligibilityReasonText>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:CHIPStateHealthBenefitsEligibilityBasis>
            <ns5:CHIPWaitingPeriodEligibilityBasis>
              <ns5:EligibilityBasisStatusCode>NotApplicable</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisIneligibilityReasonText>555</ns5:EligibilityBasisIneligibilityReasonText>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:CHIPWaitingPeriodEligibilityBasis>
            <ns5:CHIPMedicaidCitizenOrImmigrantEligibilityBasis>
              <ns4:StatusIndicator>true</ns4:StatusIndicator>
              <ns5:EligibilityBasisStatusCode>Complete</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:CHIPMedicaidCitizenOrImmigrantEligibilityBasis>
            <ns5:CHIPTraffickingVictimCategoryEligibilityBasis>
              <ns5:EligibilityBasisStatusCode>NotApplicable</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisIneligibilityReasonText>569</ns5:EligibilityBasisIneligibilityReasonText>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:CHIPTraffickingVictimCategoryEligibilityBasis>
            <ns5:CHIPTitleIIWorkQuartersMetEligibilityBasis>
              <ns5:EligibilityBasisStatusCode>NotApplicable</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisIneligibilityReasonText>632</ns5:EligibilityBasisIneligibilityReasonText>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:CHIPTitleIIWorkQuartersMetEligibilityBasis>
            <ns5:CHIP-SSNVerificationEligibilityBasis>
              <ns4:StatusIndicator>true</ns4:StatusIndicator>
              <ns5:EligibilityBasisStatusCode>Complete</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T13:49:07.887-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:CHIP-SSNVerificationEligibilityBasis>
            <ns5:MedicaidHouseholdReference ns1:ref="${MEDICAID_PREFIX}${ID}${number}" />
          </ns5:CHIPEligibility>
          <ns5:MedicaidNonMAGIEligibility ns1:id="${MEDICAID_NONIMAGE_PREFIX}${ID}${number}">
            <ns5:EligibilityDetermination>
              <ns2:ActivityDate>
                <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
              </ns2:ActivityDate>
            </ns5:EligibilityDetermination>
            <ns5:EligibilityReasonText>108</ns5:EligibilityReasonText>
            <ns5:EligibilityIndicator>false</ns5:EligibilityIndicator>
            <ns5:EligibilityEstablishingSystem>
              <ns4:InformationExchangeSystemCategoryCode>Exchange</ns4:InformationExchangeSystemCategoryCode>
            </ns5:EligibilityEstablishingSystem>
            <ns5:MedicaidHouseholdReference ns1:ref="${MEDICAID_PREFIX}${ID}${number}" />
            <ns5:MedicaidNonMAGIBlindnessOrDisabilityEligibilityBasis>
              <ns4:StatusIndicator>false</ns4:StatusIndicator>
              <ns5:EligibilityBasisStatusCode>Complete</ns5:EligibilityBasisStatusCode>
            </ns5:MedicaidNonMAGIBlindnessOrDisabilityEligibilityBasis>
          </ns5:MedicaidNonMAGIEligibility>
          <ns5:APTCEligibility ns1:id="${APTCE_PREFIX}${ID}${number}">
            <ns5:EligibilityDetermination>
              <ns2:ActivityDate>
                <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
              </ns2:ActivityDate>
            </ns5:EligibilityDetermination>
            <ns5:EligibilityReasonText>600</ns5:EligibilityReasonText>
            <ns5:EligibilityIndicator>false</ns5:EligibilityIndicator>
          </ns5:APTCEligibility>
          <ns5:ExchangeEligibility ns1:id="${EXCHANGE_ELIGIBILITY_PREFIX}${ID}${number}">
            <ns5:EligibilityDateRange>
              <ns2:StartDate>
                <ns2:Date>2024-10-01</ns2:Date>
              </ns2:StartDate>
              <ns2:EndDate>
                <ns2:Date>2024-12-31</ns2:Date>
              </ns2:EndDate>
            </ns5:EligibilityDateRange>
            <ns5:EligibilityDetermination>
              <ns2:ActivityDate>
                <ns2:DateTime>2024-09-30T14:21:10.313-04:00</ns2:DateTime>
              </ns2:ActivityDate>
            </ns5:EligibilityDetermination>
            <ns5:EligibilityEstablishingSystem>
              <ns4:InformationExchangeSystemCategoryCode>Exchange</ns4:InformationExchangeSystemCategoryCode>
            </ns5:EligibilityEstablishingSystem>
            <ns5:ExchangeQHPResidencyEligibilityBasis>
              <ns4:StatusIndicator>true</ns4:StatusIndicator>
              <ns5:EligibilityBasisStatusCode>Complete</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T13:45:14.750-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
              <ns5:MedicaidResidencyEligibilityBasisCorrectStateIndicator>true</ns5:MedicaidResidencyEligibilityBasisCorrectStateIndicator>
            </ns5:ExchangeQHPResidencyEligibilityBasis>
            <ns5:ExchangeVerifiedCitizenshipOrLawfulPresenceEligibilityBasis>
              <ns4:StatusIndicator>true</ns4:StatusIndicator>
              <ns5:EligibilityBasisStatusCode>Complete</ns5:EligibilityBasisStatusCode>
              <ns5:EligibilityBasisDetermination>
                <ns2:ActivityDate>
                  <ns2:DateTime>2024-09-30T13:49:07.887-04:00</ns2:DateTime>
                </ns2:ActivityDate>
              </ns5:EligibilityBasisDetermination>
            </ns5:ExchangeVerifiedCitizenshipOrLawfulPresenceEligibilityBasis>
          </ns5:ExchangeEligibility>
          <ns5:ReferralActivity>
            <ns2:ActivityIdentification>
              <ns2:IdentificationID>${IDENTITY_PREFIX}${IDENTITY}${number}</ns2:IdentificationID>
            </ns2:ActivityIdentification>
            <ns2:ActivityDate>
              <ns2:DateTime>2024-09-30T14:31:30.717-04:00</ns2:DateTime>
            </ns2:ActivityDate>
            <ns5:ReferralActivitySenderReference ns1:ref="Sender" />
            <ns5:ReferralActivityReceiverReference ns1:ref="chipReceiver" />
            <ns5:ReferralActivityStatus>
              <ns5:ReferralActivityStatusCode>Initiated</ns5:ReferralActivityStatusCode>
              <ns5:ReferralActivityOverallVerificationStatusCode>P</ns5:ReferralActivityOverallVerificationStatusCode>
            </ns5:ReferralActivityStatus>
            <ns5:ReferralActivityEligibilityReasonReference ns1:ref="${CHIP_ELIGIBILITY_PREFIX}${ID}${number}" />
          </ns5:ReferralActivity>
        </ns5:InsuranceApplicant>
    `
  ).join(" ");
}

function MedicaidHousehold() {
  return TOTAL.map(
    (number) =>
      `<ns5:MedicaidHousehold ns1:id="${MEDICAID_PREFIX}${ID}${number}">
          <ns5:HouseholdIncome>
            <ns4:IncomeFrequency>
              <ns4:FrequencyCode>Annually</ns4:FrequencyCode>
            </ns4:IncomeFrequency>
            <ns4:IncomeAmount>96000.000000</ns4:IncomeAmount>
            <ns4:IncomeCategoryCode>Unspecified</ns4:IncomeCategoryCode>
          </ns5:HouseholdIncome>
          <ns5:HouseholdIncome>
            <ns4:IncomeFrequency>
              <ns4:FrequencyCode>Monthly</ns4:FrequencyCode>
            </ns4:IncomeFrequency>
            <ns4:IncomeAmount>8000.00</ns4:IncomeAmount>
          </ns5:HouseholdIncome>
          ${TOTAL.map((number) => `<ns5:HouseholdMemberReference ns1:ref="${PERSON_PREFIX}${ID}${number}" />`).join(" ")}
          <ns5:MedicaidHouseholdEffectivePersonQuantity>6</ns5:MedicaidHouseholdEffectivePersonQuantity>
          <ns5:MedicaidHouseholdIncomeAboveHighestApplicableMAGIStandardIndicator>false</ns5:MedicaidHouseholdIncomeAboveHighestApplicableMAGIStandardIndicator>
        </ns5:MedicaidHousehold>`
  ).join(" ");
}

function Person() {
  return TOTAL.map(
    (number, index) => `<ns4:Person ns1:id="${PERSON_PREFIX}${ID}${number}">
        <ns2:PersonAgeMeasure>
          <ns2:MeasurePointValue>15</ns2:MeasurePointValue>
        </ns2:PersonAgeMeasure>
        <ns2:PersonBirthDate>
          <ns2:Date>${2010 + number}-08-21</ns2:Date>
        </ns2:PersonBirthDate>
        <ns2:PersonLivingIndicator>true</ns2:PersonLivingIndicator>
        <ns2:PersonName>
          <ns2:PersonGivenName>${names[index].firstName}</ns2:PersonGivenName>
          <ns2:PersonSurName>${names[index].lastName}</ns2:PersonSurName>
        </ns2:PersonName>
        <ns2:PersonRaceText>White</ns2:PersonRaceText>
        <ns2:PersonSexText>Male</ns2:PersonSexText>
        <ns2:PersonSSNIdentification ns1:metadata="${VERIFICATION_META_PREFIX}${ID}${number + 10}">
          <ns2:IdentificationID>396315434</ns2:IdentificationID>
        </ns2:PersonSSNIdentification>
        <ns2:PersonUSCitizenIndicator ns1:metadata="${VERIFICATION_META_PREFIX}${ID}${number}">true</ns2:PersonUSCitizenIndicator>
        <ns4:TribalAugmentation>
          <ns4:PersonAmericanIndianOrAlaskaNativeIndicator>false</ns4:PersonAmericanIndianOrAlaskaNativeIndicator>
        </ns4:TribalAugmentation>
        <ns4:PersonAugmentation>
        ${TOTAL.map((n, i) => {
          if (index != i) {
            return `<ns4:PersonAssociation>
            <ns2:PersonReference ns1:ref="${PERSON_PREFIX}${ID}${n}" />
            <ns4:FamilyRelationshipCode>03</ns4:FamilyRelationshipCode>
            <ns4:PersonCaretakerDependentCode>No</ns4:PersonCaretakerDependentCode>
          </ns4:PersonAssociation>`;
          }
        })}
          <ns4:PersonContactInformationAssociation>
            <ns2:ContactInformationIsPrimaryIndicator>false</ns2:ContactInformationIsPrimaryIndicator>
            <ns4:ContactInformation>
              <ns2:ContactMailingAddress>
                <ns2:StructuredAddress>
                  <ns2:LocationStreet>
                    <ns2:StreetFullText>N8580 Town Hall Rd</ns2:StreetFullText>
                  </ns2:LocationStreet>
                  <ns2:LocationCityName>Eldorado</ns2:LocationCityName>
                  <ns2:LocationCountyName>FOND DU LAC</ns2:LocationCountyName>
                  <ns2:LocationCountyCode>039</ns2:LocationCountyCode>
                  <ns2:LocationStateUSPostalServiceCode>WI</ns2:LocationStateUSPostalServiceCode>
                  <ns2:LocationPostalCode>549329626</ns2:LocationPostalCode>
                </ns2:StructuredAddress>
              </ns2:ContactMailingAddress>
            </ns4:ContactInformation>
            <ns4:ContactInformationCategoryCode>Home</ns4:ContactInformationCategoryCode>
          </ns4:PersonContactInformationAssociation>
          <ns4:PersonContactInformationAssociation>
            <ns2:ContactInformationIsPrimaryIndicator>false</ns2:ContactInformationIsPrimaryIndicator>
            <ns4:ContactInformation>
              <ns2:ContactMailingAddress>
                <ns2:StructuredAddress>
                  <ns2:LocationStreet>
                    <ns2:StreetFullText>N8580 Town Hall Rd</ns2:StreetFullText>
                  </ns2:LocationStreet>
                  <ns2:LocationCityName>Eldorado</ns2:LocationCityName>
                  <ns2:LocationCountyName>FOND DU LAC</ns2:LocationCountyName>
                  <ns2:LocationCountyCode>039</ns2:LocationCountyCode>
                  <ns2:LocationStateUSPostalServiceCode>WI</ns2:LocationStateUSPostalServiceCode>
                  <ns2:LocationPostalCode>54932-9626</ns2:LocationPostalCode>
                </ns2:StructuredAddress>
              </ns2:ContactMailingAddress>
            </ns4:ContactInformation>
            <ns4:ContactInformationCategoryCode>Residency</ns4:ContactInformationCategoryCode>
          </ns4:PersonContactInformationAssociation>
          <ns4:PersonPregnancyStatus>
            <ns4:StatusIndicator>false</ns4:StatusIndicator>
          </ns4:PersonPregnancyStatus>
          <ns4:PersonMarriedIndicator>false</ns4:PersonMarriedIndicator>
        </ns4:PersonAugmentation>
      </ns4:Person>`
  ).join(" ");
}

function TaxReturn() {
  return `<ns5:TaxReturn>
        <ns5:TaxHousehold>
          <ns5:HouseholdIncome>
            <ns4:IncomeAmount>96000.00</ns4:IncomeAmount>
            <ns4:IncomeFederalPovertyLevelPercent>239</ns4:IncomeFederalPovertyLevelPercent>
          </ns5:HouseholdIncome>
          <ns5:HouseholdSizeQuantity>10</ns5:HouseholdSizeQuantity>
          ${TOTAL.map((number) => {
            if (number === 11) {
              return `<ns5:PrimaryTaxFiler>
                <ns4:RoleOfPersonReference ns1:ref="${PERSON_PREFIX}${ID}${number}" />
              </ns5:PrimaryTaxFiler>`;
            } else if (number === 12) {
              return `<ns5:SpouseTaxFiler>
                <ns4:RoleOfPersonReference ns1:ref="${PERSON_PREFIX}${ID}${number}" />
              </ns5:SpouseTaxFiler>`;
            } else {
              return `<ns5:TaxDependent>
                <ns4:RoleOfPersonReference ns1:ref="${PERSON_PREFIX}${ID}${number}" />
              </ns5:TaxDependent>`;
            }
          }).join(" ")}
        </ns5:TaxHousehold>
        <ns5:TaxReturnIncludesDependentIndicator>true</ns5:TaxReturnIncludesDependentIndicator>
      </ns5:TaxReturn>`;
}

function VerificationMetadataCitizen() {
  return TOTAL.map(
    (number) =>
      `<ns4:VerificationMetadata ns1:id="${VERIFICATION_META_PREFIX}${ID}${number}">
        <ns4:VerificationAuthorityTDS-FEPS-AlphaCode>SSA</ns4:VerificationAuthorityTDS-FEPS-AlphaCode>
        <ns4:VerificationDate>
          <ns2:DateTime>2024-09-30T13:49:07.887-04:00</ns2:DateTime>
        </ns4:VerificationDate>
        <ns4:VerificationRequestingSystem>
          <ns4:InformationExchangeSystemCategoryCode>Exchange</ns4:InformationExchangeSystemCategoryCode>
        </ns4:VerificationRequestingSystem>
        <ns4:VerificationIndicator>true</ns4:VerificationIndicator>
        <ns4:VerificationDescriptionText>Citizenship Status</ns4:VerificationDescriptionText>
        <ns4:VerificationStatus>
          <ns4:VerificationStatusCode>5</ns4:VerificationStatusCode>
        </ns4:VerificationStatus>
        <ns4:VerificationCategoryCode>Citizenship</ns4:VerificationCategoryCode>
        <ns4:ResponseCode>HS000000</ns4:ResponseCode>
     </ns4:VerificationMetadata>`
  ).join(" ");
}

function VerificationMetadataSSN() {
  return TOTAL.map(
    (number) =>
      `<ns4:VerificationMetadata ns1:id="${VERIFICATION_META_PREFIX}${ID}${number + 10}">
        <ns4:VerificationAuthorityTDS-FEPS-AlphaCode>SSA</ns4:VerificationAuthorityTDS-FEPS-AlphaCode>
        <ns4:VerificationDate>
          <ns2:DateTime>2024-09-30T13:49:07.887-04:00</ns2:DateTime>
        </ns4:VerificationDate>
        <ns4:VerificationRequestingSystem>
          <ns4:InformationExchangeSystemCategoryCode>Exchange</ns4:InformationExchangeSystemCategoryCode>
        </ns4:VerificationRequestingSystem>
        <ns4:VerificationIndicator>true</ns4:VerificationIndicator>
        <ns4:VerificationDescriptionText>SSN</ns4:VerificationDescriptionText>
        <ns4:VerificationStatus>
          <ns4:VerificationStatusCode>5</ns4:VerificationStatusCode>
        </ns4:VerificationStatus>
        <ns4:VerificationCategoryCode>SSN</ns4:VerificationCategoryCode>
        <ns4:ResponseCode>HS000000</ns4:ResponseCode>
      </ns4:VerificationMetadata>`
  ).join(" ");
}

function PhysicalHousehold() {
  return TOTAL.map(
    (number) =>
      `<ns3:PhysicalHousehold>
        <ns5:HouseholdMemberReference ns1:ref="${PERSON_PREFIX}${ID}${number}" />
      </ns3:PhysicalHousehold>`
  ).join(" ");
}

let insurance = InsuranceApplicant();
let medicaidHousehold = MedicaidHousehold();
let person = Person();
let tax = TaxReturn();
let verificationMetaCitizen = VerificationMetadataCitizen();
let verificationSSN = VerificationMetadataSSN();
let physical = PhysicalHousehold();