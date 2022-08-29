{
	common: {
		cancel: "Cancel",
		refresh: "Refresh",
		done: "Done",
		change: "Change",
		renew: "Renew",
		retry: "Retry",
		addCard: "Add card",
		back_to_zone: (0, n.d)(u(), "zoneName"),
		email_notification: "Please <0>verify your account email address</0> to access all Registrar features such as Registration and Transfer.",
		invalid_auth_code: "The registry has indicated that the authorization code is not correct. Please re-enter the code again. If you continue to receive an authorization code error, please request a new code from your current registrar.",
		registrar_managed: "As this is a Cloudflare Registrar managed account, no payment is needed."
	},
	billing: {
		customer_action: {
			registrant_information: "Complete registrant information",
			address_validation: "Complete + verify your service address",
			select_payment_method: "Select payment method"
		},
		payment_type: {
			card: "Card",
			paypal: "PayPal",
			apple_pay: "Apple Pay"
		},
		payment_usage_type: {
			add_new: "Add new",
			authorize_new_account: "Authorize new account",
			header_card: "Select card",
			header_paypal: "Select PayPal account"
		},
		service_address: {
			header: "Billing address",
			subheader_receipt: "This is required to calculate sales tax, and will be displayed on your receipt.",
			subheader_invoice: "This is required to calculate sales tax, and will be displayed on your invoice.",
			verify_button: "Verify address",
			verify_success: "We have suggested small edits to your address, to ensure accuracy. Please edit if incorrect.",
			verify_error: "Please correct errors, above."
		},
		credit_card: {
			header_new_card: "Card details",
			header_replace_card: "New card details",
			subheader_replace_card: `This will replace your primary card on file.
By providing your card information, you allow Cloudflare, Inc. to charge your card for future payments in accordance with their terms.`,
			subheader_new_card: "By providing your card information, you allow Cloudflare, Inc. to charge your card for future payments in accordance with their terms."
		},
		captcha: {
			label: "Let us know you're human",
			error: "Captcha is required"
		},
		payment: {
			error_header: "We're sorry, there was a payment error.",
			error_message: "Please check your payment details, or try a different payment method."
		},
		complete_purchase: "Complete purchase",
		purchase_security: "All transactions are secure and encrypted.",
		purchase_agreement: (0, n.d)(N()),
		purchase_agreement_with_icloud: (0, n.d)(r()),
		automatic_renewal_agreement: "Automatic renewals may be cancelled at any time via the Domain Management page in your account. Automatic renewals will be billed to the payment method on file, until cancelled.",
		automatic_renewal_agreement_enabled: "You are consenting to the automatic renewal of your domain names(s)."
	},
	global_banner: {
		cta: "Click here",
		part_1: "Domain fees will be changing soon.",
		part_2: "for more info."
	},
	domain_page: {
		unverified_contacts: "You have unverified Contacts.",
		view_contacts: "View Contacts",
		registration: "Registration",
		contacts: "Contacts",
		configuration: "Configuration"
	},
	domains_page: {
		manage: "Manage",
		transfer: "Transfer",
		register: "Register"
	},
	register_page: {
		find: "Find a domain",
		enter: "Enter a domain name"
	},
	onboarding: {
		overview: {
			transfer_in: {
				title: "Complete your transfer",
				subtitle: (0, n.d)(R(), "domainName"),
				body: "Complete the following tasks to finish your domain transfer and activate on Cloudflare.",
				refresh: "Refresh transfer status"
			},
			trouble: {
				title: "Having trouble transferring?",
				body: "You can still activate by following the nameserver update instructions below."
			}
		}
	},
	transfer_list: {
		unlock: "Unlock domain",
		disable_privacy: "Disable Privacy",
		provide_foa: "Provide FOA",
		pending_foa: "Transfer is pending FOA. Please check your email.",
		invalid_auth_code: "Invalid auth code",
		auth_code: "Enter auth code",
		payment: (0, n.d)(E(), "amount"),
		approve: (0, n.d)(g(), "registrar"),
		success: "Transfer successful"
	},
	registration_card: {
		title: "Registration",
		pending_deletion: (0, n.d)(l(), "expired_on", "purchaseable_on"),
		renew_btn: "Renew your domain",
		auto_renew_on: "Auto Renew is on",
		auto_renew_off: "Auto Renew is off",
		auto_renew_description: "Your domain will automatically renew every year.",
		expires_on: (0, n.d)(p(), "expires_on"),
		deleted_description: "This domain was deleted",
		check_availability: "Check availability",
		not_on_cloudflare: {
			expiration: (0, n.d)(y(), "expiration"),
			transfer_cta: "Transfer to Cloudflare",
			transfer_cta_subext: (0, n.d)(h(), "price")
		},
		transfer_in_progress: {
			title: "Transfer Progress",
			uk: 'Please request your current Registrar to update the [IPS Tag](https://developers.cloudflare.com/registrar/get-started/transfer-uk-domain#possible-reasons-a-transfer-may-fail-or-be-rejected) for this domain to "CLOUDFLARE".  Please be sure to follow any additional instructions provided by your registrar.   Once your registrar has updated the [IPS Tag](https://developers.cloudflare.com/registrar/get-started/transfer-uk-domain#possible-reasons-a-transfer-may-fail-or-be-rejected), Cloudflare will be notified and the transfer will be processed.'
		},
		pending_deletion_contact_support: "This domain is currently pending deletion. Please contact support to determine if the domain may be restored."
	},
	dnssec_card: {
		title: "DNSSEC",
		description: "Adds a layer of trust on top of DNS by providing authentication.",
		already_secure: "Domain is locked. Please contact support."
	},
	add_years: {
		toggle_view: "Renew/Extend Domain",
		renew: "Renew for",
		due: (0, n.d)(M(), "amount"),
		disabled_tooltip: "Domain state does not permit renewal. Please contact support for assistance."
	},
	domainPageNotifications: {
		expiration: ["This domain will expire in <0>%{smart_count}</0> day. See registration options below.", "This domain will expire in <1>%{smart_count}</1> days. See registration options below."].join("||||"),
		renewalStatusError: "We were unable to process your payment. To keep your domain registration, <0>update your payment method</0>.",
		transferInFoaCheckEmail: "Please check the Registrant contact's email to approve or deny this transfer."
	},
	contact_form: {
		required: "*",
		optional: "(Optional)",
		if_applicable: "(if applicable)",
		firstName: "First name",
		lastName: "Last name",
		organization: "Organization",
		organization_help_text: "For individuals, just use your full name",
		address1: "Address line 1",
		address2: "Address line 2",
		city: "City",
		new_state: "State",
		state: "State or province",
		zip: "Postal code",
		country: "Country",
		phone: "Phone",
		extension: "Ext",
		number: "Number",
		phone_help_text: "Must be ITU.E formatted. ex: +1.5551231234",
		email: "Email",
		nexus_category: "Nexus category",
		application_purpose: "Application purpose",
		is_required: "This field is required."
	},
	cor_header: "Registrant contact change pending",
	cor_subheader: "The following changes are pending approval:",
	cor_resent_email: "Email sent",
	cor_resend_email: "Resend email",
	renewal_info: {
		expires_on: (0, n.d)(P(), "expiresOn"),
		renews_on: (0, n.d)(o(), "renewsOn"),
		price: "Price",
		per_year: "/ year",
		billing: (0, n.d)(i(), "last4"),
		billing_cloud: (0, n.d)(s(), "last4")
	},
	registered_on: (0, n.d)(S(), "registration_date"),
	renewals_billing_modal_title: "Confirm domain renewal for %{domain}",
	renewals_billing_line_item_1: "%{smart_count} year %{tld} renewal |||| %{smart_count} years %{tld} renewal",
	renewals_billing_line_item_1_meta: "Expires %{expiration}",
	renewals_billing_line_item_2: "ICANN renewal fee",
	status_active: "Active",
	status_pending: "Renewal Pending",
	status_not_on_cloudflare: "Not on Cloudflare",
	status_registration_in_progress: "Registration in progress",
	status_transfer_in_progress: "Transfer in progress",
	status_transfer_in_awaiting_foa: "Action Needed",
	status_payment_pending: "Payment Pending",
	status_pending_registration: "Pending registration",
	status_billing_failed: "Billing failed",
	status_registration_failed: "Registration failed",
	status_parked: "Expired - Suspended",
	status_deletion_initiated: "Redemption period",
	status_deletion_irredeemable: "Pending delete",
	status_domain_terminated: "Deleted",
	status_domain_locked: "Locked",
	back_to_domains: "Back to domains",
	back_to_registration: "Back to registration",
	back_to_contact: "Back to contact details",
	back_to_payment: "Back to payment details",
	ad_title: "Transfer your domains to Cloudflare",
	ad_subheading: "Transfer domains with zero mark-up on renewals",
	ad_body: "Cloudflare offers wholesale pricing for all TLDs - you pay what we pay.",
	ad_cta: "Start Transferring Now",
	onboarding_instructions_title: "Follow these instructions to transfer your domain",
	onboarding_enter_auth_cta: "Authorize domain transfer",
	onboarding_back_to_activation: "Back to activation methods",
	onboarding_contact_title: "Confirm your contact information",
	onboarding_contact_back: "Back to transfer instructions",
	onboarding_contact_redacted: "All contact details will be redacted for privacy by default for all domains transferred.",
	onboarding_confirm_and_finalize: "Confirm and finalize transfer",
	onboarding_success_header: "Thanks for transferring your domain to Cloudflare",
	onboarding_success_body: "You\u2019re on your way to having your domain transferred to Cloudflare. This process can take up to 5 days to complete, but can be faster if you were to go to your registrar and confirm the transfer. [Learn more about domain transfer](https://developers.cloudflare.com/registrar/).",
	onboarding_success_goto_account: "Go to my account",
	onboarding_success_banner_header: "Domain transfer complete!",
	onboarding_success_banner_body: "Your transfer is complete, however Cloudflare may still be ensuring your nameservers are correct. If you see nameserver instructions below, then you can safely ignore them.",
	onboarding_success_banner_feedback_btn: "Send us feedback",
	onboarding_billing_modal_title: "Confirm subscription changes for %{domain}",
	onboarding_billing_line_item_1: "1 %{tld} domain transfer (%{domain})",
	onboarding_billing_line_item_1_meta: "New expiration date %{expiration}",
	onboarding_billing_line_item_2: "ICANN - one time transfer fee",
	transfer_table_domain_already_paid: "Already paid",
	search_domain_unavailable: "is not available.",
	search_unsupported_tld: "does not have a supported TLD.",
	search_similar_domains: "Here are some similar domains that might be available.",
	search_try_again: "Please try searching a different domain name.",
	transfer_out_panel_title: "Transfer Out",
	transfer_out_panel_text: "Transfer to another registrar",
	transfer_out_panel_cta: "Unlock",
	transfer_out_panel_domain_locked_cta: "Lock",
	transfer_out_panel_domain_locked_cta_secondary: "Continue",
	transfer_out_panel_cannot_transfer_out_cor: "Domain is pending a change of registrant request.",
	transfer_out_panel_cannot_transfer_out_generic: "Domain cannot be transferred.",
	transfer_out_panel_cannot_transfer_out_not_on_cf: "Domain is not on Cloudflare.",
	transfer_out_panel_cannot_transfer_out_permission: "You do not have permission to transfer this domain.",
	transfer_out_panel_cannot_transfer_out_recent_creation: "Domain created within the last 60 days.",
	transfer_out_panel_cannot_transfer_out_recent_transfer: "Domain transferred within the last 60 days.",
	transfer_out_panel_cannot_transfer_out_recent_transfer_uk: "Domain transferred within the last 24 hours.",
	transfer_out_modal_domain_locked_title: "Unlock domain",
	transfer_out_modal_domain_unlocked_uk_title: "Enter Tag",
	transfer_out_modal_domain_unlocked_title: "Auth code generated",
	transfer_out_modal_domain_locked_text: "To transfer away from Cloudflare, you'll need to first unlock your domain. Once unlocked, we will generate a unique auth code that you can use to transfer to a new registrar. If you change your mind, you can reapply the lock.",
	transfer_out_modal_domain_unlocked_text: "Use the generated auth code at your new registrar to proceed with your transfer.",
	transfer_out_modal_domain_unlocked_uk_text: "Enter the Tag of the registry you would like to transfer to. If you don't know the Tag please reach out to the new Registrar for instructions.",
	transfer_out_modal_domain_locked_cta: "Confirm and Unlock",
	transfer_out_modal_complete_title: "Transfer Out Complete",
	transfer_out_modal_complete_body: "We're sorry to see you leave, but it was a pleasure serving you.",
	transfer_out_modal_submit: "Submit",
	transfer_out_modal_title: "Approve Release",
	transfer_out_modal_body: "We have received confirmation that you have started to transfer this domain away from Cloudflare. To process this transfer immediately, please approve the release. If you do not manually approve, we will release it in five days.",
	transfer_out_modal_toast: "You are transferring",
	transfer_out_modal_toast_to: "to",
	transfer_out_modal_approve: "Approve",
	whois_disclaimer: "ICANN requires registrars to keep accurate contact information for your domain (WHOIS). We will apply the contact information below to all roles in your WHOIS record. You may modify this information after the transfer.",
	whois_disclaimer_1: "Let's make sure your information is correct.",
	whois_disclaimer_2: "Registrars are required to keep accurate WHOIS contact information for your domain. We will apply the contact information below to all roles in your WHOIS record. You may modify this information after the transfer.",
	whois_disclaimer_3: "Note: failure to provide accurate information may result in your domain registration being suspended and/or deleted.",
	whois_disclaimer_4: "ICANN requires registrars to keep accurate contact information for your domain (WHOIS). We will apply the contact information below to all roles in your WHOIS record. You may modify this information after the transfer.",
	whois_disclaimer_uk: ".UK domains undergo a contact validation process to verify that the name and address is accurate.  It is important that you provide accurate and complete information.  When the domain transfers over, we will attempt to import the existing contact information assigned to the domain name.  If that information can not be imported the information below will be used.",
	whois_terms: 'By clicking \u201C%{buttonText}" you agree that you are purchasing an annual subscription which will automatically renew unless you cancel your subscription through your account dashboard before the beginning of your next annual billing period. Please note that if you cancel your subscription mid-year you will still be charged for the entire year. For more information on Cloudflare\u2019s billing, renewal and cancellation policies please visit [https://www.cloudflare.com/terms](https://www.cloudflare.com/terms)',
	whois_contact_display_registrant: "Registrant",
	whois_contact_display_administrative: "Administrative",
	whois_contact_display_technical: "Technical",
	whois_contact_display_billing: "Billing",
	primary_contact_modal_title: "Edit WHOIS Contacts",
	whois_card_title: "WHOIS",
	whois_card_text: "Edit your WHOIS contact info across all Cloudflare Registrar domains.",
	whois_card_edit: "Edit WHOIS",
	public_whois_acknowledgement: "I understand that <strong>.US</strong> Registry policy requires that the domain contact data will be made publicly accessible via a whois lookup.",
	public_whois_acknowledgement_mixed_domains: "I understand that .US Registry policy requires that the domain contact data for .US domains will be made publicly accessible via a whois lookup. Contact details for other domains will be redacted.",
	auth_code_section_title: "Authorization code required",
	auth_code_section_description: "You may have entered the incorrect auth code for this domain.",
	auth_code_section_submit: "Submit auth code",
	unsupported_domains_show: "Show %{smart_count} domain unable to transfer |||| Show %{smart_count} domains unable to transfer",
	unsupported_domains_hide: "Hide %{smart_count} domain unable to transfer |||| Hide %{smart_count} domains unable to transfer",
	unsupported_domains_tab_on_cloudflare: "(%{num_domains}) Already on Cloudflare",
	unsupported_domains_tab_off_cloudflare: "(%{num_domains}) Unable to transfer",
	unsupported_domains_explanation: "Some domains cannot be transferred to Cloudflare Registrar. If you registered, transferred, or modified the contact information on a domain in the last 60 days, we cannot transfer yet. In other cases, we do not yet support the TLD. We're constantly working to improve that list, though. Check back soon.",
	eligibility_unknown_domains_show: "Show %{smart_count} domain with unknown transfer eligibility* |||| Show %{smart_count} domains with unknown transfer eligibility*",
	eligibility_unknown_domains_hide: "Hide %{smart_count} domain with unknown transfer eligibility* |||| Hide %{smart_count} domains with unknown transfer eligibility*",
	unknown_eligibility_domains_description: "*These domains MAY be available for transfer, however we don't have enough information to make a determination at this moment.  Don't worry, we're attempting to determine the current state of each  domain.  This process may take some time so please try back in 5 minutes.  If we are still unable to make a determination please contact support for assistance.",
	instructions_enom: m,
	instructions_godaddy: O,
	instructions_namecheap: T,
	instructions_network_solutions: C,
	instructions_one_and_one: L,
	instructions_unknown: v,
	instructions_uk: B,
	instructions_restrictions: a,
	instructions_restrictions_title: "Show restrictions",
	instructions_known_title: "Transfer your domain from %{registrar}",
	instructions_unknown_title: "Follow these instructions to transfer your domain",
	instructions_uk_title: ".UK Domain Transfer Instructions",
	account_verification_title: "First, we need you to validate your email address",
	account_verification_instructions: "ICANN rules require that registrants validate the email address on their account otherwise the registration can be frozen. Please use the link below to validate the email address on your account. Once you have confirmed the email address, you can start transferring your domains to the world's first at-cost registrar.",
	account_verification_email: "Email address:",
	account_verification_status_pending: "(pending verification)",
	account_verification_status_unverified: "(not verified)",
	account_verification_toast: "Your email address is not verified. Some Registrar features will be disabled.",
	account_verification_toast_link: "Send verification Email",
	account_verification_toast_result: "Verification Email Sent.",
	account_verification_refresh_note: "Note: Please refresh this page, once the verification is complete.",
	cancel_transfer_title: "Cancel",
	cancel_transfer_body: "If you believe an issue has occurred during your transfer, you can cancel this request and restart the process. You will not be billed twice for the same domain.",
	cancel_transfer_close: "Close",
	cancel_transfer_cancel: "Cancel transfer",
	domain_registration_advanced_settings: "Manage domain",
	domain_registration_edit: "Edit",
	domain_registration_enable: "Enable",
	domain_registration_disable: "Disable",
	domain_registration_unknown: "Unknown",
	domain_registration_title: "Domain Registration",
	domain_registration_transfer_status: "Status:",
	domain_registration_transfer_retry: "Retry",
	domain_registration_registrar: "Registrar",
	domain_registration_registrar_colon: "Registrar:",
	domain_registration_expires: "Expires:",
	domain_registration_transfer_cloudflare: "Transfer to Cloudflare",
	domain_registration_auto_renew: "Auto Renew Registration",
	domain_registration_auto_renews_on: "Renews on",
	domain_registration_auto_renew_unknown: "Unknown renewal date",
	domain_registration_whois_contact: "WHOIS Contact Info",
	domain_registration_cancel_transfer: "Cancel and retry transfer",
	domain_registration_dnssec: "DNSSEC",
	domain_registration_status_pending: "Pending Activation",
	domain_registration_status_cancelling: "Pending Cancellation",
	domain_registration_status_active: "Activated",
	domain_registration_status_disabled: "Disabled",
	domain_management_new_tld_banner_1: "**.TV** and **.CC** domains now available!",
	domain_management_new_tld_banner_2: "**.US** domains now available!",
	domain_management_auto_renew_disabled: "No payment method in billing profile. Add one to enable automatic renewal.",
	domain_registration_setting_up_pending_title: "We are setting up your domain",
	domain_registration_setting_up_pending_subtitle: "This may take a few seconds",
	domain_registration_setting_up_error_title: "Domain registration failed",
	domain_registration_setting_up_error_subtitle: "We are sorry! Something went wrong.",
	domain_registration_out_transfer_out: "Transfer out of Cloudflare",
	domain_registration_out_transfer_request: "A request to transfer out of Cloudflare Registrar has been initiated.",
	domain_registration_out_reject_transfer: "Reject Transfer",
	domain_registration_out_accept_transfer: "Accept Transfer",
	registration_button_submit: "Submit",
	registration_button_submitting: "Submitting...",
	registration_step_registration: "Registration",
	registration_step_contact_details: "Contact Details",
	registration_step_additional_details: "Additional Details",
	registration_step_payment_details: "Payment Details",
	registration_step_review: "Review",
	retry_domain_auth: "You may have entered the incorrect auth code for this domain.",
	retry_domain_auth_update: "Update",
	retry_transfer_title: "Retry Transfer",
	retry_transfer_body_title: "Transfer cancelled at",
	retry_transfer_body: "It appears that the transfer at your previous registrar was cancelled. To continue transferring to Cloudflare, enter a new auth code and click retry. You will not be billed twice.",
	retry_transfer_retry: "Retry transfer",
	retry_transfer_auth_code: "Auth code",
	validation_registrar_cloudflare: "On Cloudflare",
	validation_is_available: "Not registered",
	validation_zone_inactive: "Not an active zone",
	validation_transfer_waiting: "Registered in last 60 days",
	validation_tld_blacklisted: "TLD not yet supported",
	validation_tld_unsupported: "Unsupported TLD. Check back soon!",
	validation_auth_code_required: "Auth code required",
	validation_domain_locked: "Domain locked",
	validation_privacy_enabled: "Privacy enabled",
	validation_approval_pending: "Approval pending",
	validation_prev_registrar_rejected: "Rejected at previous registrar",
	validation_prev_registrar_pending: "Pending release from previous registrar",
	validation_transfer_rejected: "Rejected",
	validation_transfer_in_progress: "Transfer in progress",
	validation_requires: "Requires",
	validation_requires_full_zone: "Full DNS Setup",
	wizard_auth_code_tooltip: "There was an error with the request. Please try again.",
	wizard_auth_code_single: "domain to authorize",
	wizard_auth_code_multiple: "domains to authorize",
	wizard_disclaimer_restrictions_title: "Restrictions",
	wizard_disclaimer_restrictions_body_intro: "Domains shown in the Cloudflare dashboard as available meet all transfer requirements.",
	wizard_disclaimer_restrictions_body: "Otherwise, the following restrictions apply:",
	wizard_disclaimer_restrictions_item_icann: "ICANN prohibits transferring a domain if in the last 60 days:",
	wizard_disclaimer_restrictions_item_icann_transfer: "it has been transferred, or",
	wizard_disclaimer_restrictions_item_icann_whois: "the WHOIS contact information has been modified or redacted.",
	wizard_disclaimer_restrictions_item_expired: "You must renew any expired domains, and may need to pay a redemption fee.",
	wizard_disclaimer_restrictions_item_premium: "Cloudflare does not support premium domains. Some registries designate certain higher-priced domains as",
	wizard_disclaimer_restrictions_item_premium_em: "premium.",
	wizard_disclaimer_forwarding_title: "Email Forwarding",
	wizard_disclaimer_forwarding_body: "Cloudflare Registrar does not support email forwarding. To avoid disrupting email delivery, use a third-party forwarding service and update your Cloudflare DNS settings to include the corresponding MX record.",
	wizard_legal_body_one: 'By clicking "Confirm and Finalize Transfer" you agree to purchasing an annual subscription that renews automatically, unless you cancel your subscription(s) through your account dashboard before the next billing period begins. Early cancellation incurs charges for the entire subscription period. Your invoice will include any final sales tax, including state and local taxes when applicable. Visit',
	wizard_legal_body_two: "for additional information about Cloudflare's billing, renewal, and cancellation policies.",
	wizard_legal_body_uk: "If you elect to enable DNSSEC for any .uk domain, please note that Nominet, the .UK Registry, accepts no liability in relation to the operation or use of DNSSEC records.  They will take reasonable steps to correct any error in the DNSSEC records, where such an error is as a result of a mistake on their part, but will otherwise accept no liability for the error.  Registrants accept all risk in relation to the use of DNSSEC in relation to their domain names.",
	wizard_one_title: "Select domains to transfer",
	wizard_one_no_pmt_method: "In order to transfer domains, you must",
	wizard_one_add_pmt_method: "add a payment method",
	wizard_one_body_extends: "Most transfers result in one extra year added to the term of the domain.  The following are exceptions to this:",
	wizard_one_body_extends_point1: ".UK transfers do NOT add the additional year.",
	wizard_one_body_extends_point2: "If the transfer completes within 45 days following the expiration date, the extra year MAY NOT be added.  This policy is set by the Registry.",
	wizard_one_body_extends_point3: "If the domain currently has more than 9 years left on the current term, a full year MAY NOT be added.  This policy is set by the Registry.",
	wizard_one_body_help: "Need help? Instructions are [available here](https://developers.cloudflare.com/registrar/)",
	wizard_one_body_strong: "Your registration auto-renews by default.",
	wizard_one_body_auto_renew: "After the transfer completes, you can turn off auto-renew in the Overview page.",
	wizard_one_toast_save: "You could save up to",
	wizard_one_toast_save_tail: "per year with Cloudflare Registrar.",
	wizard_one_no_domains_to_transfer: "You currently have no domains available for transfer to Cloudflare.",
	wizard_one_eligibility_unknown_title: "The transfer eligibility of the following domain is unknown*: |||| The transfer eligibility of the following domains is unknown*:",
	wizard_one_unsupported_title: "The following domain is unavailable for transfer: |||| The following domains are unavailable for transfer:",
	wizard_one_unsupported_body: "Some domains cannot be transferred to Cloudflare Registrar. If you registered, transferred, or modified the contact information on a domain in the last 60 days, we cannot transfer yet. In other cases, we do not yet support the TLD. We're constantly working to improve that list, though. Check back soon.",
	wizard_one_footer_text: "Confirm Domains",
	wizard_two_title: "First, let's transfer your domains from GoDaddy",
	wizard_two_body: "You can use your GoDaddy credentials to transfer your domains automatically, or input the details manually.",
	wizard_two_radio_yes: "Yes, I'd like to log into GoDaddy and transfer these domains automatically",
	wizard_two_gd_username: "GoDaddy Username",
	wizard_two_gd_pwd: "GoDaddy Password",
	wizard_two_gd_login_error: "Unable to authenticate - Please check that your GoDaddy Username and Password are correct and try again.",
	wizard_two_gd_login_disclaimer: "We promise to only use your GoDaddy account to transfer your domains.",
	wizard_two_gd_login_disclaimer_tail: "We won't store this information anywhere.",
	wizard_two_radio_no: "No, I'd like to follow a step-by-step guide to transfer them manually",
	wizard_two_list_title: "2. Domains to transfer",
	wizard_two_footer_text: "Transfer Domains",
	wizard_three_total_cost: "Total transfer cost:",
	wizard_three_footer_text: "Confirm and Proceed",
	wizard_four_title: "Confirm contact information",
	wizard_four_body_intro: "Let's make sure your information is correct.",
	wizard_four_toast_info: "To protect your privacy, contact details for transferred domains will be redacted.",
	wizard_four_footer_text: "Confirm and Finalize Transfer",
	wizard_five_tweet: "Tweet",
	wizard_five_tweet_text: "I just started transferring my domains to Cloudflare, the world's first no-markup registrar.",
	wizard_five_transfers_failed: "Something went wrong...",
	wizard_five_transfers_failed_details: "The following domains failed to transfer:",
	wizard_five_transfers_some_failed_details: "Some domains failed to transfer. See below for details per domain.",
	wizard_five_transfers_underway: "Your transfers are now underway!",
	wizard_five_transfer_uk: 'Please request your current Registrar to update the IPS Tag to "CLOUDFLARE". ',
	wizard_five_thanks: "Thanks for transferring your domains to Cloudflare",
	wizard_five_thanks_info: "Your current registrar\xA0can wait up to five days to\xA0transfer your domain to Cloudflare.\xA0However, you can request they release the domain earlier by responding to their confirmation email or approving the transfer in their dashboard.",
	wizard_five_add_sites: "Want to stop overpaying for the rest of your domains? Add them to your Cloudflare account and you'll be able to transfer them to Cloudflare Registrar immediately.",
	wizard_five_add_sites_link: "Add More Sites",
	wizard_transfer_error_pmt_declined: "Your payment has been declined. Please check with your payment provider or try again with a different payment method.",
	wizard_transfer_error_possible_pmt_declined: "Something went wrong. It may be that your payment has been declined. Please check with your payment provider or try again with a different payment method.",
	wizard_transfer_error_no_profile: "We are unable to locate a billing profile for your account. Our team has been notified of the issue and will investigate.",
	wizard_transfer_error_retry: "Please retry transferring this domain. You have not been charged.",
	wizard_transfer_error_auth_code_fail: "Auth code entry failed. Retry in zone overview.",
	wizard_transfer_error_auth_code_required: "Skipped - auth code required.",
	wizard_transfer_error_skipped: "Skipped",
	wizard_table_header_name: "Domain name",
	wizard_table_header_cur_exp: "Current expiration",
	wizard_table_header_new_exp: "New expiration",
	wizard_table_header_cur_exp_with_separator: "Current expiration: ",
	wizard_table_header_new_exp_with_separator: "New expiration: ",
	wizard_table_header_cost: "Wholesale cost",
	wizard_table_and: "And",
	wizard_table_more: "more",
	wizard_table_collapse: "Collapse",
	wizard_table_total_fee: "ICANN Fee:",
	wizard_table_total: "Total:",
	wizard_table_mobile_select_all: "Select all",
	wizard_table_mobile_deselect_all: "Deselect all",
	wizard_unsupported_reason_characters: "Unsupported characters",
	wizard_unsupported_reason_cloudflare: "Already on Cloudflare",
	wizard_unsupported_reason_premium: "Premium domains not yet supported",
	wizard_unsupported_reason_auth_code_invalid: "Invalid auth code.",
	wizard_unsupported_reason_auth_code_try_again: "Try Again",
	wizard_unsupported_reason_transfer_rejected: "Transfer rejected.",
	wizard_unsupported_reason_zone_overview: "Domain page",
	wizard_unsupported_reason_transfer_waiting: "Domain registered in the last 60 days",
	wizard_unsupported_reason_ambiguous: "Unsupported",
	wizard_five_us_tld: "An email may be sent to the Registrant email address, if found in WHOIS.  Please check your email for a confirmation request.",
	cancel: "Cancel",
	registration_checkout_back: "Back to Find a domain",
	registration_checkout_title: "Complete your registration",
	registration_checkout_duration_select_label: "Payment option",
	registration_checkout_duration_select_description: "Your domain will be registered for %{duration} and will expire on <strong>%{date}</strong>.",
	registration_checkout_contact_header: "Registrant information",
	registration_checkout_contact_sub_header: "This is for your domain\u2019s legal record, and to contact you if there are problems with your registration.",
	registration_checkout_contact_redaction_notice: "Cloudflare will redact all personal information sent to this domain's WHOIS record.",
	registration_checkout_public_whois_ack: "I understand that my personal information in this section will be publicly displayed in domain-record searches, as required by the <strong>.us</strong> domains registry.",
	registration_checkout_self_certification_header: "Self certification",
	registration_checkout_self_certification_sub_header: 'In order to register a <strong>.us</strong> domain, the US Department of Commerce (USDC) requires folks to qualify their intentions for using a website behind a <strong>.us</strong> domain, and to self-certify their person or business as belonging to <a href="https://www.about.us/cdn/resources/ebooks/policies/usTLD_Nexus_Requirements_Policy.pdf" target="_blank">one of three Nexus Categories</a>.',
	registration_checkout_validation_error_contact_fields: "Please complete required fields.",
	registration_checkout_validation_error_public_whois: "You must check the box at the top of this form in order to continue with your purchase of a .us domain.",
	registration_checkout_validation_error_self_certification: "You must answer both questions in the Self Certification section in order to continue with your purchase of a .us domain.",
	registration_checkout_validation_error_multiple: "Please correct errors, above.",
	registration_checkout_payment_header: "Payment",
	registration_checkout_auto_renew_header: "Automatic renewal",
	registration_checkout_auto_renew_sub_header: "We can auto-renew your domain for <strong>1 year</strong> before it expires on <strong>%{date}</strong>. You may return to update this setting at any time.",
	registration_checkout_auto_renew_sub_header_disabled: "You may enable Automatic Renewal after completing your purchase, by adding another payment method to your Billing Profile.",
	registration_checkout_auto_renew_label: "Enable automatic renewals",
	registration_checkout_total_header: "Total",
	registration_checkout_total_sub_header: "Your payment will include any sales tax required by your location.",
	registration_checkout_select_payment: "Select payment method",
	registration_checkout_error_header: "We're sorry, something went wrong with that.",
	registration_checkout_error_sub_header: 'Please review your purchase details and try again, or <a href="https://support.cloudflare.com" target="_blank">contact Support</a> for assistance.',
	registration_checkout_customer_action_registrant: "Complete registrant information",
	registration_checkout_customer_action_self_cert: "Complete self certification",
	registration_checkout_customer_action_payment_method: "Select payment method",
	registration_checkout_customer_action_payment_info: "Complete payment information",
	registration_success_title: "All done!",
	registration_success_navigate_icloud_cta: "Return to <strong>iCloud</strong>",
	registration_success_navigate_icloud_description: "Cloudflare will pass your registry information back to Apple. Welcome to Cloudflare!",
	registration_success_navigate_manage_cta: "Manage domain",
	registration_success_whois_header: "WHOIS information",
	registration_success_whois_sub_header: "What Cloudflare has sent to WHOIS as the legal record of your domain registration.",
	registration_success_whois_show_more: "Show more",
	registration_success_whois_show_less: "Show less",
	registration_success_whois_no_data: "No WHOIS information is currently available.",
	registration_success_renewal_header: "Automatic renewal",
	registration_success_renewal_sub_header: "This domain is set to expire on <strong>%{date}</strong>",
	registration_success_renewal_description_no_billing_profile: "Cloudflare can automatically renew your registration once a credit card is on file for us to charge.",
	registration_success_renewal_description_on: "Cloudflare will automatically renew your registration 60 days before it expires.",
	registration_success_renewal_description_off: "Cloudflare can automatically renew your registration 60 days before it expires.",
	registration_success_renewal_button_on: "Cancel Auto Renew",
	registration_success_renewal_button_off: "Enable Auto Renew",
	registration_success_product_list_header: "Do more with Cloudflare",
	registration_success_product_list_plans_description: "Secure and accelerate your website with Cloudflare.",
	registration_success_product_list_plans_link_cta: "See plans",
	registration_success_product_list_pages_description: "Easily host your static website on Cloudflare Pages.",
	registration_success_product_list_pages_link_cta: "Learn more",
	cannot_transfer: "cannot be transferred...",
	cannot_transfer_default: "Unable to transfer domain",
	cannot_transfer_zone_not_active: "Zone is not active",
	cannot_transfer_zone_not_eligible: "Zone is not eligible",
	cannot_transfer_domain_on_cf: "Domain is already on Cloudflare",
	cannot_transfer_domain_available: "Domain is available",
	cannot_transfer_domain_transfer_conditions: "Transfer conditions not met",
	cannot_transfer_domain_premium: "Domain is premium",
	cannot_transfer_domain_transfer_in_progress: "Transfer is already in progress",
	cannot_transfer_domain_tld_not_supported: "TLD not supported",
	pricing_title: "Upcoming Price Changes",
	pricing_description: "Due to changes in the Registry pricing, our fees for the following TLDs will be changing. All transactions, including auto-renewals, that occur on or after the effective date will be billed at the new price. As a reminder, renewals can be submitted manually at any time.",
	pricing_table_header_tld: "TLD",
	pricing_table_header_current_fee: "Current Fee (per year)",
	pricing_table_header_new_fee: "New Fee (per year)",
	pricing_table_header_date: "Effective Date"
}