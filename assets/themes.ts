import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const purpleTheme: CustomThemeConfig = {
	name: 'purple',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': 'var(--color-primary-500)',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #0ba81a
		'--color-primary-50': '218 242 221', // #daf2dd
		'--color-primary-100': '206 238 209', // #ceeed1
		'--color-primary-200': '194 233 198', // #c2e9c6
		'--color-primary-300': '157 220 163', // #9ddca3
		'--color-primary-400': '84 194 95', // #54c25f
		'--color-primary-500': '11 168 26', // #0ba81a
		'--color-primary-600': '10 151 23', // #0a9717
		'--color-primary-700': '8 126 20', // #087e14
		'--color-primary-800': '7 101 16', // #076510
		'--color-primary-900': '5 82 13', // #05520d
		// secondary | #c304c3
		'--color-secondary-50': '246 217 246', // #f6d9f6
		'--color-secondary-100': '243 205 243', // #f3cdf3
		'--color-secondary-200': '240 192 240', // #f0c0f0
		'--color-secondary-300': '231 155 231', // #e79be7
		'--color-secondary-400': '213 79 213', // #d54fd5
		'--color-secondary-500': '195 4 195', // #c304c3
		'--color-secondary-600': '176 4 176', // #b004b0
		'--color-secondary-700': '146 3 146', // #920392
		'--color-secondary-800': '117 2 117', // #750275
		'--color-secondary-900': '96 2 96', // #600260
		// tertiary | #377af9
		'--color-tertiary-50': '225 235 254', // #e1ebfe
		'--color-tertiary-100': '215 228 254', // #d7e4fe
		'--color-tertiary-200': '205 222 254', // #cddefe
		'--color-tertiary-300': '175 202 253', // #afcafd
		'--color-tertiary-400': '115 162 251', // #73a2fb
		'--color-tertiary-500': '55 122 249', // #377af9
		'--color-tertiary-600': '50 110 224', // #326ee0
		'--color-tertiary-700': '41 92 187', // #295cbb
		'--color-tertiary-800': '33 73 149', // #214995
		'--color-tertiary-900': '27 60 122', // #1b3c7a
		// success | #d2bcad
		'--color-success-50': '248 245 243', // #f8f5f3
		'--color-success-100': '246 242 239', // #f6f2ef
		'--color-success-200': '244 238 235', // #f4eeeb
		'--color-success-300': '237 228 222', // #ede4de
		'--color-success-400': '224 208 198', // #e0d0c6
		'--color-success-500': '210 188 173', // #d2bcad
		'--color-success-600': '189 169 156', // #bda99c
		'--color-success-700': '158 141 130', // #9e8d82
		'--color-success-800': '126 113 104', // #7e7168
		'--color-success-900': '103 92 85', // #675c55
		// warning | #18c6c3
		'--color-warning-50': '220 246 246', // #dcf6f6
		'--color-warning-100': '209 244 243', // #d1f4f3
		'--color-warning-200': '197 241 240', // #c5f1f0
		'--color-warning-300': '163 232 231', // #a3e8e7
		'--color-warning-400': '93 215 213', // #5dd7d5
		'--color-warning-500': '24 198 195', // #18c6c3
		'--color-warning-600': '22 178 176', // #16b2b0
		'--color-warning-700': '18 149 146', // #129592
		'--color-warning-800': '14 119 117', // #0e7775
		'--color-warning-900': '12 97 96', // #0c6160
		// error | #9af3b6
		'--color-error-50': '240 253 244', // #f0fdf4
		'--color-error-100': '235 253 240', // #ebfdf0
		'--color-error-200': '230 252 237', // #e6fced
		'--color-error-300': '215 250 226', // #d7fae2
		'--color-error-400': '184 247 204', // #b8f7cc
		'--color-error-500': '154 243 182', // #9af3b6
		'--color-error-600': '139 219 164', // #8bdba4
		'--color-error-700': '116 182 137', // #74b689
		'--color-error-800': '92 146 109', // #5c926d
		'--color-error-900': '75 119 89', // #4b7759
		// surface | #2a3e43
		'--color-surface-50': '223 226 227', // #dfe2e3
		'--color-surface-100': '212 216 217', // #d4d8d9
		'--color-surface-200': '202 207 208', // #cacfd0
		'--color-surface-300': '170 178 180', // #aab2b4
		'--color-surface-400': '106 120 123', // #6a787b
		'--color-surface-500': '42 62 67', // #2a3e43
		'--color-surface-600': '38 56 60', // #26383c
		'--color-surface-700': '32 47 50', // #202f32
		'--color-surface-800': '25 37 40', // #192528
		'--color-surface-900': '21 30 33' // #151e21
	}
};
export const navyBlueTheme: CustomThemeConfig = {
	name: 'navy-blue',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #d13898
		'--color-primary-50': '248 225 240', // #f8e1f0
		'--color-primary-100': '246 215 234', // #f6d7ea
		'--color-primary-200': '244 205 229', // #f4cde5
		'--color-primary-300': '237 175 214', // #edafd6
		'--color-primary-400': '223 116 183', // #df74b7
		'--color-primary-500': '209 56 152', // #d13898
		'--color-primary-600': '188 50 137', // #bc3289
		'--color-primary-700': '157 42 114', // #9d2a72
		'--color-primary-800': '125 34 91', // #7d225b
		'--color-primary-900': '102 27 74', // #661b4a
		// secondary | #6218f0
		'--color-secondary-50': '231 220 253', // #e7dcfd
		'--color-secondary-100': '224 209 252', // #e0d1fc
		'--color-secondary-200': '216 197 251', // #d8c5fb
		'--color-secondary-300': '192 163 249', // #c0a3f9
		'--color-secondary-400': '145 93 245', // #915df5
		'--color-secondary-500': '98 24 240', // #6218f0
		'--color-secondary-600': '88 22 216', // #5816d8
		'--color-secondary-700': '74 18 180', // #4a12b4
		'--color-secondary-800': '59 14 144', // #3b0e90
		'--color-secondary-900': '48 12 118', // #300c76
		// tertiary | #d040a5
		'--color-tertiary-50': '248 226 242', // #f8e2f2
		'--color-tertiary-100': '246 217 237', // #f6d9ed
		'--color-tertiary-200': '243 207 233', // #f3cfe9
		'--color-tertiary-300': '236 179 219', // #ecb3db
		'--color-tertiary-400': '222 121 192', // #de79c0
		'--color-tertiary-500': '208 64 165', // #d040a5
		'--color-tertiary-600': '187 58 149', // #bb3a95
		'--color-tertiary-700': '156 48 124', // #9c307c
		'--color-tertiary-800': '125 38 99', // #7d2663
		'--color-tertiary-900': '102 31 81', // #661f51
		// success | #d34927
		'--color-success-50': '248 228 223', // #f8e4df
		'--color-success-100': '246 219 212', // #f6dbd4
		'--color-success-200': '244 210 201', // #f4d2c9
		'--color-success-300': '237 182 169', // #edb6a9
		'--color-success-400': '224 128 104', // #e08068
		'--color-success-500': '211 73 39', // #d34927
		'--color-success-600': '190 66 35', // #be4223
		'--color-success-700': '158 55 29', // #9e371d
		'--color-success-800': '127 44 23', // #7f2c17
		'--color-success-900': '103 36 19', // #672413
		// warning | #3a70f6
		'--color-warning-50': '225 234 254', // #e1eafe
		'--color-warning-100': '216 226 253', // #d8e2fd
		'--color-warning-200': '206 219 253', // #cedbfd
		'--color-warning-300': '176 198 251', // #b0c6fb
		'--color-warning-400': '117 155 249', // #759bf9
		'--color-warning-500': '58 112 246', // #3a70f6
		'--color-warning-600': '52 101 221', // #3465dd
		'--color-warning-700': '44 84 185', // #2c54b9
		'--color-warning-800': '35 67 148', // #234394
		'--color-warning-900': '28 55 121', // #1c3779
		// error | #319d63
		'--color-error-50': '224 240 232', // #e0f0e8
		'--color-error-100': '214 235 224', // #d6ebe0
		'--color-error-200': '204 231 216', // #cce7d8
		'--color-error-300': '173 216 193', // #add8c1
		'--color-error-400': '111 186 146', // #6fba92
		'--color-error-500': '49 157 99', // #319d63
		'--color-error-600': '44 141 89', // #2c8d59
		'--color-error-700': '37 118 74', // #25764a
		'--color-error-800': '29 94 59', // #1d5e3b
		'--color-error-900': '24 77 49', // #184d31
		// surface | #241d82
		'--color-surface-50': '222 221 236', // #deddec
		'--color-surface-100': '211 210 230', // #d3d2e6
		'--color-surface-200': '200 199 224', // #c8c7e0
		'--color-surface-300': '167 165 205', // #a7a5cd
		'--color-surface-400': '102 97 168', // #6661a8
		'--color-surface-500': '36 29 130', // #241d82
		'--color-surface-600': '32 26 117', // #201a75
		'--color-surface-700': '27 22 98', // #1b1662
		'--color-surface-800': '22 17 78', // #16114e
		'--color-surface-900': '18 14 64' // #120e40
	}
};
export const darkRedTheme: CustomThemeConfig = {
	name: 'dark-red',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #f9feb4
		'--color-primary-50': '254 255 244', // #fefff4
		'--color-primary-100': '254 255 240', // #fefff0
		'--color-primary-200': '254 255 236', // #feffec
		'--color-primary-300': '253 255 225', // #fdffe1
		'--color-primary-400': '251 254 203', // #fbfecb
		'--color-primary-500': '249 254 180', // #f9feb4
		'--color-primary-600': '224 229 162', // #e0e5a2
		'--color-primary-700': '187 191 135', // #bbbf87
		'--color-primary-800': '149 152 108', // #95986c
		'--color-primary-900': '122 124 88', // #7a7c58
		// secondary | #ffffff
		'--color-secondary-50': '255 255 255', // #ffffff
		'--color-secondary-100': '255 255 255', // #ffffff
		'--color-secondary-200': '255 255 255', // #ffffff
		'--color-secondary-300': '255 255 255', // #ffffff
		'--color-secondary-400': '255 255 255', // #ffffff
		'--color-secondary-500': '255 255 255', // #ffffff
		'--color-secondary-600': '230 230 230', // #e6e6e6
		'--color-secondary-700': '191 191 191', // #bfbfbf
		'--color-secondary-800': '153 153 153', // #999999
		'--color-secondary-900': '125 125 125', // #7d7d7d
		// tertiary | #ead6e4
		'--color-tertiary-50': '252 249 251', // #fcf9fb
		'--color-tertiary-100': '251 247 250', // #fbf7fa
		'--color-tertiary-200': '250 245 248', // #faf5f8
		'--color-tertiary-300': '247 239 244', // #f7eff4
		'--color-tertiary-400': '240 226 236', // #f0e2ec
		'--color-tertiary-500': '234 214 228', // #ead6e4
		'--color-tertiary-600': '211 193 205', // #d3c1cd
		'--color-tertiary-700': '176 161 171', // #b0a1ab
		'--color-tertiary-800': '140 128 137', // #8c8089
		'--color-tertiary-900': '115 105 112', // #736970
		// success | #d34927
		'--color-success-50': '248 228 223', // #f8e4df
		'--color-success-100': '246 219 212', // #f6dbd4
		'--color-success-200': '244 210 201', // #f4d2c9
		'--color-success-300': '237 182 169', // #edb6a9
		'--color-success-400': '224 128 104', // #e08068
		'--color-success-500': '211 73 39', // #d34927
		'--color-success-600': '190 66 35', // #be4223
		'--color-success-700': '158 55 29', // #9e371d
		'--color-success-800': '127 44 23', // #7f2c17
		'--color-success-900': '103 36 19', // #672413
		// warning | #3a70f6
		'--color-warning-50': '225 234 254', // #e1eafe
		'--color-warning-100': '216 226 253', // #d8e2fd
		'--color-warning-200': '206 219 253', // #cedbfd
		'--color-warning-300': '176 198 251', // #b0c6fb
		'--color-warning-400': '117 155 249', // #759bf9
		'--color-warning-500': '58 112 246', // #3a70f6
		'--color-warning-600': '52 101 221', // #3465dd
		'--color-warning-700': '44 84 185', // #2c54b9
		'--color-warning-800': '35 67 148', // #234394
		'--color-warning-900': '28 55 121', // #1c3779
		// error | #319d63
		'--color-error-50': '224 240 232', // #e0f0e8
		'--color-error-100': '214 235 224', // #d6ebe0
		'--color-error-200': '204 231 216', // #cce7d8
		'--color-error-300': '173 216 193', // #add8c1
		'--color-error-400': '111 186 146', // #6fba92
		'--color-error-500': '49 157 99', // #319d63
		'--color-error-600': '44 141 89', // #2c8d59
		'--color-error-700': '37 118 74', // #25764a
		'--color-error-800': '29 94 59', // #1d5e3b
		'--color-error-900': '24 77 49', // #184d31
		// surface | #992e2e
		'--color-surface-50': '240 224 224', // #f0e0e0
		'--color-surface-100': '235 213 213', // #ebd5d5
		'--color-surface-200': '230 203 203', // #e6cbcb
		'--color-surface-300': '214 171 171', // #d6abab
		'--color-surface-400': '184 109 109', // #b86d6d
		'--color-surface-500': '153 46 46', // #992e2e
		'--color-surface-600': '138 41 41', // #8a2929
		'--color-surface-700': '115 35 35', // #732323
		'--color-surface-800': '92 28 28', // #5c1c1c
		'--color-surface-900': '75 23 23' // #4b1717
	}
};
