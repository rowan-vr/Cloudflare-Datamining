const navigation = {
	root: [{
		title: "navigation.root.accounts",
		url: "/",
		iconType: "user-multi"
	}, {
		title: "navigation.root.websites",
		url: "/websites",
		iconType: "internet-browser"
	}, {
		title: "navigation.root.profile",
		url: "/profile",
		iconType: "user-outline"
	}],
	profile: [{
		title: "navigation.profile.preferences",
		url: "/",
		iconType: "edit"
	}, {
		title: "navigation.profile.access_management",
		url: "/access-management",
		iconType: "lock",
		hasPermission: function(Ce) {
			return !!(0, fe.z1)("oauth-access-management")(Ce)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(Ce) {
			return !(0, V.n3)() && !(0, fe.z1)("oauth-access-management")(Ce)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(Ce) {
			return !(0, fe.z1)("oauth-access-management")(Ce)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(Ce) {
			return (0, fe.z1)("registrar-account-home-copy-experiment")(Ce) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(Ce) {
				return v(Ce)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			labels: ["new"],
			hasPermission: function(Ce) {
				return v(Ce)
			}
		}]
	}, {
		title: "navigation.common.analytics",
		url: "",
		iconType: "chart",
		pages: [{
			title: "navigation.account.account_analytics",
			url: "/analytics",
			labels: ["beta"],
			hasPermission: function(Ce) {
				return I(Ce)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics",
			hasPermission: function(Ce) {
				return I(Ce) && !!(0, D.getAccountFlipperFlag)(Ce, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(Ce) {
				return I(Ce)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(Ce) {
				return I(Ce) && !!(0, D.getAccountFlipperFlag)(Ce, "account_analytics", "carbon_dashboard")
			}
		}]
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(Ce) {
			return I(Ce) && (0, ce.dU)(Ce)
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(Ce) {
			return I(Ce)
		}
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(Ce) {
			return I(Ce)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(Ce) {
				return !!(0, D.getAccountFlipperFlag)(Ce, "workers", "origin_workers") && !!(0, D.getAccountFlipperFlag)(Ce, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(Ce) {
				return !1
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans"
		}]
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		labels: ["beta"],
		hasPermission: function(Ce) {
			return I(Ce)
		}
	}, {
		title: "navigation.account.firewall_rulesets",
		url: "/rulesets",
		iconType: "shield",
		hasPermission: function(Ce) {
			return I(Ce) && !!(m(Ce) || R(Ce))
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.ddos",
			url: "/rulesets",
			hasPermission: function(Ce) {
				var Tt = !!h(Ce) && !!A(Ce);
				return !!j(Ce) || Tt
			}
		}, {
			title: "navigation.account.firewall_rulesets.application_firewall",
			url: function(Ce) {
				var Tt = !!j(Ce) || !!h(Ce) && !!A(Ce);
				return Tt ? "/rulesets/managed" : "/rulesets"
			},
			hasPermission: function(Ce) {
				return !!m(Ce)
			}
		}, {
			title: "navigation.account.firewall_rulesets.magic_firewall",
			url: "/rulesets/magic_firewall",
			testId: "account-magic-firewall-rules",
			hasPermission: function(Ce) {
				return !!R(Ce)
			}
		}, {
			title: "navigation.account.firewall_rulesets.browse_rulesets",
			url: "/rulesets/custom"
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(Ce) {
			return I(Ce)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(Ce) {
				return E(Ce)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(Ce) {
				return E(Ce)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(Ce) {
				return E(Ce)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		labels: ["new"],
		hasPermission: function(Ce) {
			return I(Ce) && !!(0, D.getAccountFlipperFlag)(Ce, "cloudflare_images", "early_release_access")
		}
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(Ce) {
			return I(Ce) && (0, te.sL)(Ce)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(Ce) {
				return I(Ce) && (0, te.sL)(Ce)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(Ce) {
				return I(Ce) && (0, te.sL)(Ce)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(Ce) {
				return I(Ce) && (0, te.TT)(Ce)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: function(Ce) {
				return I(Ce) && (0, te.jD)(Ce)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			hasPermission: function(Ce) {
				return I(Ce) && (0, te.BU)(Ce)
			}
		}]
	}, {
		title: "navigation.account.teams",
		url: "https://dash.teams.cloudflare.com",
		iconType: "cloudflare-zero-trust",
		labels: ["external-link"],
		hasPermission: function(Ce) {
			return I(Ce)
		}
	}, {
		title: "navigation.account.ip_prefixes",
		url: "/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		hasPermission: function(Ce) {
			return I(Ce) && !!(0, D.getAccountFlipperFlag)(Ce, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: function(Ce) {
			return I(Ce) && !!(0, D.getAccountFlipperFlag)(Ce, "magic_transit", "mt_home")
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(Ce) {
			return I(Ce) && !!(0, D.getAccountFlipperFlag)(Ce, "magic_wan", "mw_home")
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(Ce) {
			return I(Ce)
		}
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(Ce) {
			return I(Ce)
		}
	}, {
		title: "navigation.account.manage_account",
		url: "",
		iconType: "gear",
		labels: ["border-top"],
		testId: "manage-account-link",
		pages: [{
			title: "navigation.account.members",
			url: "/members",
			testId: "account-homepage-members",
			hasPermission: function(Ce) {
				return I(Ce)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(Ce) {
				return (0, u.b)(Ce) ? I(Ce) : (0, D.getPermission)(Ce)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(Ce) {
				return I(Ce)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(Ce) {
				return I(Ce)
			}
		}]
	}],
	zone: [{
		title: "navigation.common.overview",
		url: "/",
		iconType: "clipboard",
		testId: "zone-navigation-link-overview"
	}, {
		title: "navigation.common.analytics",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		hasPermission: function(Ce) {
			return x(Ce, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			hasPermission: function(Ce) {
				return !(0, a.zoneIsDNSOnly)(Ce)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			hasPermission: function(Ce) {
				return !(0, a.zoneIsDNSOnly)(Ce)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			hasPermission: function(Ce) {
				return !(0, a.zoneIsDNSOnly)(Ce)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			hasPermission: function(Ce) {
				var Tt = (0, f.getZone)(Ce);
				return Tt ? !!(!(0, a.zoneIsDNSOnly)(Ce) && !!(0, f.getZoneFlipperFlag)(Ce, "origin_reachability_dash", "dash_view") && (0, f.isPlanAtLeast)(Tt, "enterprise") && !!(0, H.getZoneGraphQLSettingEnabled)(Ce, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			hasPermission: function(Ce) {
				var Tt = (0, f.getZone)(Ce);
				return Tt ? !!(!(0, a.zoneIsDNSOnly)(Ce) && !!(0, f.getZoneFlipperFlag)(Ce, "edge_reachability_dash", "dash_view") && (0, f.isPlanAtLeast)(Tt, "enterprise") && !!(0, H.getZoneGraphQLSettingEnabled)(Ce, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			hasPermission: function(Ce) {
				return !(0, a.zoneIsDNSOnly)(Ce)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			hasPermission: function(Ce) {
				return Object.values((0, $.H_)(Ce)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			hasPermission: function(Ce) {
				return !(0, a.zoneIsDNSOnly)(Ce) && !!(0, f.getZoneFlipperFlag)(Ce, "logs", "instant_log") && !!(0, a.getZoneEntitlement)(Ce, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(Ce) {
			return x(Ce, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.email",
		url: "/email",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		labels: ["beta"],
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: function(Ce) {
			var Tt = (0, f.getZone)(Ce);
			if ((0, a.zoneIsDNSOnly)(Ce) || !B(Ce, "zone_settings", "spectrum.app") || !Tt) return !1;
			var Pt = !!((0, Z.userHasEntZones)(Ce) || (0, f.userHasDelegatedEntZones)(Ce)),
				Wt = !!(0, f.getZoneFlipperFlag)(Ce, "spectrum", "enabled"),
				tn = !!(0, f.isFree)(Tt);
			return Wt || Pt || !tn
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates"
		}, {
			title: "navigation.zone.ssl-tls.staging_certs",
			url: "/ssl-tls/staging-certificates",
			hasPermission: function(Ce) {
				return (0, a.hasAccountEntitlement)(Ce, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			hasPermission: function(Ce) {
				return !!(0, fe.z1)("client-certificates")(Ce) || !!(0, f.getZoneFlipperFlag)(Ce, "ssl", "client_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.origin_server",
			url: "/ssl-tls/origin"
		}, {
			title: "navigation.zone.ssl-tls.custom_hostnames",
			url: "/ssl-tls/custom-hostnames"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security",
		iconType: "shield",
		testId: "zone-navigation-link-security",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/security"
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.page_shield",
			url: "/security/page-shield"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(Ce) {
				return !!(0, D.getAccountFlipperFlag)(Ce, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			hasPermission: function(Ce) {
				return (0, a.hasZoneEntitlement)(Ce, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			hasPermission: function(Ce) {
				var Tt = (0, f.getZone)(Ce);
				return Tt ? !!(0, f.getZoneFlipperFlag)(Ce, "firewall", "api_shield_tab") && (0, f.isPlanAtLeast)(Tt, "business") : !1
			}
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos"
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings"
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && (B(Ce, "access", "access.app") || B(Ce, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/speed"
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}, {
			title: "navigation.zone.speed.browser_insights",
			url: "/speed/browser-insights"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/caching"
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(Ce) {
				return I(Ce)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(Ce) {
				return !!L(Ce)
			}
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && B(Ce, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules"
		}, {
			title: "account.bulk_redirects.title",
			labels: ["beta", "absolute"],
			url: function(Ce) {
				var Tt = (0, D.getAccount)(Ce);
				return "/".concat(Tt == null ? void 0 : Tt.id, "/bulk-redirects")
			},
			hasPermission: function(Ce) {
				return I(Ce)
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(Ce) {
				return !!(0, f.getZoneFlipperFlag)(Ce, "page_rules", "normalization") && x(Ce, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		hasPermission: function(Ce) {
			return x(Ce, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(Ce) {
				return !(0, a.zoneIsDNSOnly)(Ce)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			hasPermission: function(Ce) {
				return !(0, a.zoneIsDNSOnly)(Ce)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			hasPermission: function(Ce) {
				return I(Ce)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			hasPermission: function(Ce) {
				return I(Ce)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			hasPermission: function(Ce) {
				return !(0, a.zoneIsDNSOnly)(Ce)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			hasPermission: function(Ce) {
				return !(0, a.zoneIsDNSOnly)(Ce) && !!(0, H.getZoneGraphQLSettingEnabled)(Ce, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			hasPermission: function(Ce) {
				return !(0, a.zoneIsDNSOnly)(Ce) && ((0, a.hasZoneEntitlement)(Ce, "waiting_rooms.allowed") || !!(0, f.getZoneFlipperFlag)(Ce, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		labels: function(Ce) {
			var Tt = [],
				Pt = (0, f.getZone)(Ce);
			return Pt && !(0, f.isPlanAtLeast)(Pt, "pro") && Tt.push("beta"), Tt
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools",
			url: "/zaraz"
		}, {
			title: "navigation.zone.zaraz.triggers",
			url: "/zaraz/triggers"
		}, {
			title: "navigation.zone.zaraz.settings",
			url: "/zaraz/settings"
		}]
	}, {
		title: "navigation.zone.web3",
		url: "/web3",
		iconType: "web3",
		labels: ["new"],
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce)
		}
	}],
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security/waf",
		iconType: "shield",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(Ce) {
				return !!(0, D.getAccountFlipperFlag)(Ce, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos"
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings"
		}]
	}, {
		title: "navigation.zone.speed",
		url: "/speed/optimization",
		iconType: "bolt",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(Ce) {
				return I(Ce)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(Ce) {
				return x(Ce, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(Ce) {
				return !!(0, f.getZoneFlipperFlag)(Ce, "page_rules", "normalization") && x(Ce, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(Ce) {
			return x(Ce, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(Ce) {
				return !(0, a.zoneIsDNSOnly)(Ce)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(Ce) {
			return !(0, a.zoneIsDNSOnly)(Ce) && x(Ce, "zone_settings", "setting")
		}
	}]
}