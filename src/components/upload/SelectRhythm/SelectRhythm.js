import React from 'react'
import './../styles/upload.css'

export const SelectRhythm = ({ rhythms, hadlerChange }) => {
	return (
		<>
			<select
				className="upload_input"
				onChange={hadlerChange}
				required
				name="ritmo"
				id="ritmo"
			>
				{rhythms.map((r) => (
					<option key={r} value={r}>
						{r.toUpperCase()}
					</option>
				))}
			</select>
		</>
	)
}
